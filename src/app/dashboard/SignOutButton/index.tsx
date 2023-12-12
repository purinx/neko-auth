'use client';

import { signOut } from '../actions';
import cs from './SignOutButton.module.css';

export const SignOutButton = () => {
  return (
    <button className={cs.floating} type="button" onClick={() => void signOut()}>
      Sign Out
    </button>
  );
};
