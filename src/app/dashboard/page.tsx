import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { supabase } from '@/lib/supabase';

const DashboardPage = async () => {
  const cookie = cookies();
  const token = cookie.get('token');
  if (!token) {
    redirect('/auth/sign-in');
  }

  const { data: auth } = await supabase.auth.getUser(token.value);
  if (!auth.user) {
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
