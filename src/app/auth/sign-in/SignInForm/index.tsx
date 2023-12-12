'use client';

import { Field, Form, Label } from '@radix-ui/react-form';
import { useFormState } from 'react-dom';

import { signIn } from '../actions';
import { ErrorMessage } from '@/lib/components/typographies';

/**
 * @radix-ui/react-form が useContextを使っているのが憎い
 */
export const SignInForm = () => {
  const [{ errors }, dispatch] = useFormState(signIn, { errors: {} });
  return (
    <Form role="form">
      <Field name="email">
        <Label htmlFor="signIn-form-email">Email</Label>
        {errors.email?.map((e) => (
          <ErrorMessage key={e}>{e}</ErrorMessage>
        ))}
        <input
          id="signIn-form-email"
          aria-invalid={errors.email && 'true'}
          name="email"
          autoComplete="email"
          type="email"
        />
      </Field>
      <Field name="password">
        <Label htmlFor="signIn-form-pw">Password</Label>
        {errors.password?.map((e) => (
          <ErrorMessage key={e}>{e}</ErrorMessage>
        ))}
        <input
          aria-invalid={errors.password && 'true'}
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
