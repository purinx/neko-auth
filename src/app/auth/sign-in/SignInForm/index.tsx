'use client';

import { Field, Form, Label, Message } from '@radix-ui/react-form';
import { useFormState } from 'react-dom';

import { signIn } from '../actions';

/**
 * @radix-ui/react-form が useContextを使っているのが憎い
 */
export const SignInForm = () => {
  const [{ errors }, dispatch] = useFormState(signIn, { errors: {} });
  return (
    <Form role="form" action={dispatch}>
      <Field name="email">
        <Label htmlFor="signIn-form-email">Email</Label>
        {errors.email?.map((e) => (
          <Message key={e}>{e}</Message>
        ))}
        <Message match="valueMissing">必須です。</Message>
        <input id="signIn-form-email" name="email" autoComplete="email" type="email" />
      </Field>
      <Field name="password">
        <Label htmlFor="signIn-form-pw">Password</Label>
        {errors.password?.map((e) => (
          <Message key={e}>{e}</Message>
        ))}
        <input
          id="signIn-form-pw"
          name="password"
          autoComplete="password"
          type="password"
        />
      </Field>
      <button formAction={dispatch} type="submit">
        signIn
      </button>
    </Form>
  );
};
