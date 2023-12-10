import { Meta } from '@storybook/react';

import { RegisterForm } from '.';

const meta: Meta = {
  title: 'RegisterForm',
  component: RegisterForm,
};

export default meta;

export const Component = () => (
  <main className="container">
    <RegisterForm />
  </main>
);
Component.args = {};
