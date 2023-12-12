import { SignInForm } from './SignInForm';

const SignInPage = () => {
  return (
    <main className="container">
      <h1>Sign In</h1>
      <SignInForm />
      <a href="/auth/register">{`>`} register</a>
    </main>
  );
};

export default SignInPage;
