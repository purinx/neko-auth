import { Meta } from '@storybook/react';

import { ErrorMessage } from '.';

export const Component = () => (
  <main className="container">
    <ErrorMessage>error message</ErrorMessage>
  </main>
);

Component.args = {};

const meta: Meta = {
  title: 'Typographies',
  component: Component,
};

export default meta;
