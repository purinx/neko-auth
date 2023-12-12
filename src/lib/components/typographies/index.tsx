import { ComponentProps } from 'react';

import { Message } from '@radix-ui/react-form';

export const ErrorMessage = (props: ComponentProps<typeof Message>) => (
  <Message className="error" {...props} />
);
