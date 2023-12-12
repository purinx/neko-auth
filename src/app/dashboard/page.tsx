import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { supabase } from '@/lib/supabase';
import { DescriptionList } from '@/lib/components/layouts/DescriptionList';
import { SignOutButton } from './SignOutButton';

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

  if (!user) {
    redirect('/auth/sign-in');
  }

  return (
    <main className="container">
      <h1>
        {user.name}
        {"'"}s Dashboard
      </h1>
      <DescriptionList>
        <dt>name</dt>
        <dd>{user.name}</dd>
        <dt>email</dt>
        <dd>{auth.user.email}</dd>
      </DescriptionList>
      <SignOutButton />
    </main>
  );
};

export default DashboardPage;
