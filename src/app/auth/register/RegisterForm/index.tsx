"use server";

import { Field, Form, Label, Message } from "@radix-ui/react-form";
import { register } from "../actions";

export const RegisterForm = () => {
  return (
    <Form action={register}>
      <Field name="name">
        <Label>Name</Label>
        <Message match="valueMissing">必須です。</Message>
        <Message match="typeMismatch">メールアドレスに誤りがあります。</Message>
        <input required />
      </Field>
      <Field name="email">
        <Label>Email</Label>
        <Message match="valueMissing">必須です。</Message>
        <input type="email" required />
      </Field>
      <Field name="password">
        <Label>Password</Label>
        <Message match="valueMissing">必須です。</Message>
        <input type="password" required />
      </Field>
      <button type="submit">Register</button>
    </Form>
  );
};
