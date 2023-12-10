import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { RegisterForm } from '.';

const dummy = {
  name: 'test',
  email: 'admin@example.com',
  password: 'password12345',
};

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormState: () => [{ errors: {} }, jest.fn()],
}));

describe('RegisterForm', () => {
  test('inputが入力できる', async () => {
    render(<RegisterForm />);

    const form = await screen.findByRole('form');
    expect(form).toHaveFormValues({
      name: '',
      email: '',
      password: '',
    });

    const nameInput = await screen.findByLabelText('Name');
    const emailInput = await screen.findByLabelText('Email');
    const pwInput = await screen.findByLabelText('Password');

    act(() => {
      fireEvent.change(nameInput, { target: { value: dummy.name } });
      fireEvent.change(emailInput, { target: { value: dummy.email } });
      fireEvent.change(pwInput, { target: { value: dummy.password } });
    });

    expect(form).toHaveFormValues(dummy);
  });
});
