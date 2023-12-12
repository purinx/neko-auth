'use client';

import { Field, Form, Label } from '@radix-ui/react-form';
import { useFormState, useFormStatus } from 'react-dom';

import { signIn } from '../actions';
import { ErrorMessage } from '@/lib/components/typographies';

export const SignInForm = () => {
  const { pending } = useFormStatus();
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
      <button
        formAction={dispatch}
        type="submit"
        aria-busy={pending}
        aria-disabled={pending}
      >
        signIn
      </button>
    </Form>
  );
};
