import { redirect } from 'next/navigation';

import { supabase } from '@/lib/supabase';

const DashboardPage = async () => {
  const { data: auth } = await supabase.auth.getUser();
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
    <main>
      <h1>{user?.name} Dashboard</h1>
    </main>
  );
};

export default DashboardPage;
