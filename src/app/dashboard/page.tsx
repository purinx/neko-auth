import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { supabase } from '@/lib/supabase';

const DashboardPage = async () => {
  const cookie = cookies();
  const token = cookie.get('token');
  if (!token) {
    console.error('No token found');
    redirect('/auth/sign-in');
  }

  const { data: auth } = await supabase.auth.getUser(token.value);
  if (!auth.user) {
    console.error('User not found');
    redirect('/auth/sign-in');
  }
  const { data: user } = await supabase
    .from('users')
    .select('name')
    .eq('id', auth.user.id)
    .single();

  return (
    <main className="container">
      <h1>{user?.name} Dashboard</h1>
    </main>
  );
};

export default DashboardPage;
