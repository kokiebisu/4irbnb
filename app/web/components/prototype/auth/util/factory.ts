import { auth } from '../prototype-auth-auth';
import { exists } from '../prototype-auth-exists';
import { forgotPassword } from '../prototype-auth-forgot';
import { login } from '../prototype-auth-login';
import { signup } from '../prototype-auth-signup';

export const factory = (props) => {
  return {
    ...auth(props),
    ...exists(props),
    ...forgotPassword(props),
    ...login(props),
    ...signup(props),
  };
};
