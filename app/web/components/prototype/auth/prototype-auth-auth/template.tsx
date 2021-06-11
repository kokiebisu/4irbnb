import { useFormik } from 'formik';
import { useAuthDispatch, useAuthState } from '@context/auth';
import { Input } from '@input';
import { Button } from '@atoms';
import { validateAuth as validate } from '@helper/auth';

export interface AuthPrototypeTemplateProps {}

/**
 * Renders the auth template component
 */
export const AuthPrototypeTemplate: React.FC<AuthPrototypeTemplateProps> = () => {
  const authState = useAuthState();
  const authDispatch = useAuthDispatch();

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
                variant="region"
                direction="bottom"
                onChange={formik.handleChange}
                value={formik.values.region}
                errors={!!formik.errors.region}
              />
              <Input
                variant="phone"
                direction="top"
                onChange={formik.handleChange}
                value={formik.values.phone}
                errors={!!formik.errors.phone}
              />
            </div>
          </div>
          <div>
            <p className="font-thin text-gray-500 text-sm">
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.
            </p>
          </div>
          <div className="my-4">
            <Button variant="primary" title="Continue" stretch />
          </div>
        </form>
        <div className="z-10 text-center relative ba">
          <span className="z-30 relative px-1 bg-white font-thin text-gray-500 text-sm">
            or
          </span>
        </div>
        {/* <div>
          {methods.map((method, index) => {
            return (
              <div key={index} className={[space['m-v--14']].join(' ')}>
                <Button
                  variant={$Button.AUTH}
                  extendsTo={[
                    button['hover__auth'],
                    color['bg--transparent'],
                    layout['block'],
                    shape['w--full'],
                    space['p-h--12'],
                    space['p-v--12'],
                    shape['br--8'],
                  ].join(' ')}
                  auth={method}
                  onClick={auths[method].handleClick}
                  icon={auths[method].icon}
                  name={auths[method].name}
                />
              </div>
            );
          })}
        </div> */}
        <div className="mt-1">
          <div className="inline-block mr-2">
            <p className="text-sm font-light text-gray-600">
              {authState.title === 'Log in'
                ? "Don't have an account?"
                : 'Already have an account?'}
            </p>
          </div>
          <Button
            variant="underline"
            onClick={switchAuth}
            title={authState.title === 'Log in' ? 'Sign up' : 'Log in'}
          />
        </div>
      </div>
    </div>
  );
};
