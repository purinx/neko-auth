'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const signOut = () => {
  const cookie = cookies();
  cookie.delete('token');

  redirect('/auth/sign-in');
};
