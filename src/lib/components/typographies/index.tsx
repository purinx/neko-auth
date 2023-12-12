import { ComponentProps } from 'react';

export const ErrorMessage = (props: ComponentProps<'span'>) => (
  <span className="error" {...props} />
);
