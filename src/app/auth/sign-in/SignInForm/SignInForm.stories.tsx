import { Meta } from '@storybook/react';

import { SignInForm } from '.';

const meta: Meta = {
  title: 'SignInForm',
  component: SignInForm,
};

export default meta;

export const Component = () => (
  <main className="container">
    <SignInForm />
  </main>
);

Component.args = {};
