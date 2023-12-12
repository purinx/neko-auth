'use client';

import { Field, Form, Label } from '@radix-ui/react-form';
import { useFormState } from 'react-dom';

import { register } from '../actions';
import { ErrorMessage } from '@/lib/components/typographies';

/**
 * @radix-ui/react-form が useContextを使っているのが憎い
 */
export const RegisterForm = () => {
  const [{ errors }, dispatch] = useFormState(register, { errors: {} });
  return (
    <Form role="form" action={dispatch}>
      <Field name="name">
        <Label htmlFor="register-form-name">Name</Label>
        {errors.name?.map((e) => (
          <ErrorMessage key={e}>{e}</ErrorMessage>
        ))}
        <input aria-invalid={!!errors.name} id="register-form-name" name="name" />
      </Field>
      <Field name="email">
        <Label htmlFor="register-form-email">Email</Label>
        {errors.email?.map((e) => (
          <ErrorMessage key={e}>{e}</ErrorMessage>
        ))}
        <input
          aria-invalid={!!errors.email}
          id="register-form-email"
          name="email"
          autoComplete="email"
          type="email"
        />
      </Field>
      <Field name="password">
        <Label htmlFor="register-form-pw">Password</Label>
        {errors.password?.map((e) => (
          <ErrorMessage key={e}>{e}</ErrorMessage>
        ))}
        <input
          aria-invalid={!!errors.password}
          id="register-form-pw"
          name="password"
          autoComplete="password"
          type="password"
        />
      </Field>
      <button formAction={dispatch} type="submit">
        Register
      </button>
    </Form>
  );
};
