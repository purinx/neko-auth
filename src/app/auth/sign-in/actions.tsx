'use server';
import { redirect } from 'next/navigation';

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
  const validation = RegisterSchema.safeParse({
    email: data.get('email'),
    password: data.get('password'),
  });

  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };
  }

  const { email, password } = validation.data;

  await supabase.auth.signInWithPassword({ email, password });

  redirect('/dashboard');
};
