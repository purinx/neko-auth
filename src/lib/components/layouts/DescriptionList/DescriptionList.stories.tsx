import { Meta } from '@storybook/react';

import { DescriptionList } from '.';

export const Component = () => (
  <main className="container">
    <DescriptionList>
      <dt>name</dt>
      <dd>value</dd>
      <dt>name</dt>
      <dd>value</dd>
    </DescriptionList>
  </main>
);

Component.args = {};

const meta: Meta = {
  title: 'Description List',
  component: Component,
};

export default meta;
