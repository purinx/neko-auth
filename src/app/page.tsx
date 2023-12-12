import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Home() {
  const cookie = cookies();
  const token = cookie.get('token');

  if (token) {
    redirect('/dashboard');
  }

  redirect('/auth/sign-in');
}
