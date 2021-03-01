/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useFormik } from 'formik';
import { Input, $Input } from '@nextbnb/atoms-input';
import { Button, $BuBUTTONtton } from '@nextbnb/atoms-button';
import { getAuthContents } from '../content/auth';
import { validateAuth as validate } from '@nextbnb/design/helper/validation';

/**
 * Renders the auth template component
 */
export const AuthPrototype: React.FC<{
  title?: string;
  authDispatch?: (param: any) => void;
}> = ({ title = 'Log in', authDispatch }) => {
  const auths = getAuthContents(title, authDispatch);
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
    if (title === 'Log in') {
      return authDispatch({ type: 'auth_signup' });
    }
    return authDispatch({ type: 'auth_login' });
  };

  return (
    <div css={{ padding: 24 }}>
      <div css={{ width: '100%' }}>
        <form onSubmit={formik.handleSubmit}>
          <div css={{ marginBottom: 8 }}>
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
            <p
              css={{ fontWeight: 100, fontSize: 12 }}
              sx={{ color: 'grey.500' }}
            >
              We’ll call or text you to confirm your number. Standard message
              and data rates apply.
            </p>
          </div>
          <div css={{ marginTop: 18, marginBottom: 18 }}>
            <Button variant={$BUTTON.primary} title="Continue" block />
          </div>
        </form>
        <div
          css={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <span
            css={{
              zIndex: 3,
              position: 'relative',
              padding: '0 4px',
              fontWeight: 100,
              fontSize: 12,
            }}
            sx={{
              bg: 'white',
              color: 'grey.500',
            }}
          >
            or
          </span>
        </div>
        <div>
          {methods.map((method, index) => {
            return (
              <div key={index} css={{ margin: '14px 0' }}>
                <Button
                  variant={$BUTTON.auth}
                  extendsTo={{
                    border: '2px solid',
                    borderColor: '#b0b0b0',
                    padding: 12,
                    borderRadius: 8,
                  }}
                  auth={method}
                  onClick={auths[method].handleClick}
                  icon={auths[method].icon}
                  name={auths[method].name}
                  block
                />
              </div>
            );
          })}
        </div>
        <div css={{ marginTop: 4 }}>
          <div css={{ display: 'inline-block', marginRight: 6 }}>
            <p
              css={{
                fontSize: 14,
                fontWeight: 300,
              }}
              sx={{
                color: 'grey.600',
              }}
            >
              {title === 'Log in'
                ? "Don't have an account?"
                : 'Already have an account?'}
            </p>
          </div>
          <Button
            variant={$BUTTON.underline}
            onClick={switchAuth}
            title={title === 'Log in' ? 'Sign up' : 'Log in'}
          />
        </div>
      </div>
    </div>
  );
};
