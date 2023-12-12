'use server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import z from 'zod';

import { supabase } from '@/lib/supabase';

const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type State = {
  errors: { [key: string]: string[] | undefined };
};

export const signIn = async (_prev: State, data: FormData) => {
  const cookie = cookies();
  const validation = RegisterSchema.safeParse({
    email: data.get('email'),
    password: data.get('password'),
  });

  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };
  }

  const { email, password } = validation.data;

  const res = await supabase.auth.signInWithPassword({ email, password });
  if (res.data.session) {
    supabase.auth.setSession(res.data.session);

    // server actionでログインさせるには自前でtokenをcookieにセットする必要がある
    cookie.set('token', res.data.session.access_token);
    redirect('/dashboard');
  }
  return { errors: { password: ['Invalid email or password'] } };
};
