'use server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import z from 'zod';

import { supabase } from '@/lib/supabase';

const RegisterSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  password: z.string().min(8),
});

type State = {
  errors: { [key: string]: string[] | undefined };
};

export const register = async (_prev: State, data: FormData) => {
  const validation = RegisterSchema.safeParse({
    email: data.get('email'),
    name: data.get('name'),
    password: data.get('password'),
  });

  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };
  }

  const { email, name, password } = validation.data;

  const { data: auth } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  const { error } = await supabase.from('users').insert({ id: auth.user?.id, name });

  if (error) {
    throw error;
  }
  const cookie = cookies();
  const res = await supabase.auth.signInWithPassword({ email, password });
  if (res.data.session) {
    supabase.auth.setSession(res.data.session);

    // server actionでログインさせるには自前でtokenをcookieにセットする必要がある
    cookie.set('token', res.data.session.access_token);
    redirect('/dashboard');
  }

  redirect('/dashboard');
};
