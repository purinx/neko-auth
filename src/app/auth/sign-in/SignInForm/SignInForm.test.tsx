import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { SignInForm } from '.';

const dummy = {
  email: 'admin@example.com',
  password: 'password12345',
};

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormState: () => [{ errors: {} }, jest.fn()],
  useFormStatus: () => [{ errors: {} }, jest.fn()],
}));

describe('SignInForm', () => {
  test('入力できる', async () => {
    render(<SignInForm />);

    const form = await screen.findByRole('form');
    expect(form).toHaveFormValues({
      email: '',
      password: '',
    });

    const emailInput = await screen.findByLabelText('Email');
    const pwInput = await screen.findByLabelText('Password');

    act(() => {
      fireEvent.change(emailInput, { target: { value: dummy.email } });
      fireEvent.change(pwInput, { target: { value: dummy.password } });
    });

    expect(form).toHaveFormValues(dummy);
  });
});
