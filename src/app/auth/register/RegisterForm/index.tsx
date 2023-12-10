'use client';

import { Field, Form, Label, Message } from '@radix-ui/react-form';
import { register } from '../actions';
import { useFormState } from 'react-dom';

/**
 * @radix-ui/react-form が useContextを使っているのが憎い
 */
export const RegisterForm = () => {
  const [{ errors }, dispatch] = useFormState(register, { errors: {} });
  console.log(errors);
  return (
    <Form role="form" action={dispatch}>
      <Field name="name">
        <Label htmlFor="register-form-name">Name</Label>
        {errors.name?.map((e) => (
          <Message key={e}>{e}</Message>
        ))}
        <input id="register-form-name" name="name" />
      </Field>
      <Field name="email">
        <Label htmlFor="register-form-email">Email</Label>
        {errors.email?.map((e) => (
          <Message key={e}>{e}</Message>
        ))}
        <Message match="valueMissing">必須です。</Message>
        <input id="register-form-email" name="email" autoComplete="email" type="email" />
      </Field>
      <Field name="password">
        <Label htmlFor="register-form-pw">Password</Label>
        {errors.password?.map((e) => (
          <Message key={e}>{e}</Message>
        ))}
        <input
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
