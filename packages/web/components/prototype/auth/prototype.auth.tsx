import { useFormik } from 'formik';

import { useAuthDispatch, useAuthState } from '@context/auth';

import space from '@styles/space.module.scss';
import shape from '@styles/shape.module.scss';
import font from '@styles/font.module.scss';
import layout from '@styles/layout.module.scss';
import color from '@styles/color.module.scss';
import modalStyles from '@modal/modal.module.scss';

import { Input, $Input } from '@input';
import { Button, $Button } from '@button';
import { getAuthContents } from '@button/content/content.auth';

import { validateAuth as validate } from '@helper/auth';

/**
 * Renders the auth template component
 */
export const AuthPrototype: React.FC<{}> = () => {
  const auths = getAuthContents();
  const authState = useAuthState();
  const authDispatch = useAuthDispatch();
  const methods = ['email', 'facebook', 'google', 'apple'];

  const formik = useFormik({
    initialValues: {
      region: '',
      phone: '',
    },
    validate,
    onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const switchAuth = () => {
    if (authState.title === 'Log in') {
      return authDispatch({ type: 'auth_signup' });
    }
    return authDispatch({ type: 'auth_login' });
  };

  return (
    <div className="p-5">
      <div className="w-full">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-2">
            <div>
              <Input
                variant={$Input.REGION}
                direction="bottom"
                handleChange={formik.handleChange}
                value={formik.values.region}
                errors={formik.errors.region}
              />
              <Input
                variant={$Input.PHONE}
                direction="top"
                handleChange={formik.handleChange}
                value={formik.values.phone}
                errors={formik.errors.phone}
              />
            </div>
          </div>
          <div>
            <p className="font-thin text-gray-500 text-xs">
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.
            </p>
          </div>
          <div className="mt-4 mb-4">
            <Button variant={$Button.PRIMARY} title="Continue" block stretch />
          </div>
        </form>
        <div className="horizontal-line text-center relative z-10">
          <span
            style={{ zIndex: 3 }}
            className="z-30 relative px-1 bg-white font-thin text-gray-400 text-sm"
          >
            or
          </span>
        </div>
        <div>
          {methods.map((method, index) => {
            return (
              <div key={index} className="my-3">
                <Button
                  variant={$Button.AUTH}
                  auth={method}
                  onClick={auths[method].handleClick}
                  icon={auths[method].icon}
                  name={auths[method].name}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-1">
          <div className="inline-block mr-2">
            <p className="text-sm font-light text-gray-400">
              {authState.title === 'Log in'
                ? "Don't have an account?"
                : 'Already have an account?'}
            </p>
          </div>
          <Button
            variant={$Button.UNDERLINE}
            onClick={switchAuth}
            title={authState.title === 'Log in' ? 'Sign up' : 'Log in'}
          />
        </div>
      </div>
    </div>
  );
};
