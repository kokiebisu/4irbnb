/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { useFormik } from 'formik';

// import { useAuthDispatch, useAuthState } from "@context/auth";
import { Input, $INPUT } from '@nextbnb/atoms-input/dist/bundle.esm';
import { Button, $BUTTON } from '@nextbnb/atoms-button/dist/bundle.esm';
import { Bullet, $BULLET } from '@nextbnb/atoms-bullet/dist/bundle.esm';
import { Card, $CARD } from '@nextbnb/molecules-card/dist/bundle.esm';

import { validateLogin as validate } from '@nextbnb/design/helper/validation';
import { usePost } from '@nextbnb/design/hooks/usePost';

/**
 * Renders the login template component
 */
const LoginTemplate: React.FC<{
  authState?: any;
  reload?: () => void;
  signup?: () => void;
  login?: () => void;
  forgotPassword?: () => void;
}> = ({
  authState,
  reload = () => alert('Page reloaded'),
  signup = () => alert('Signup triggered'),
  login = () => alert('Login triggered'),
  forgotPassword = () => alert('Forgot password triggered'),
}) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('pending');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      const submit = usePost({
        url: '/api/users/signin',
        body: values,
        triggerLoading(state) {
          setLoading(state);
        },
        onSuccess() {
          reload();
        },
        onFail() {
          setStatus('fail');
        },
      });
      submit();
    },
  });

  const switchAuth = () => {
    if (authState.title === 'Log in') {
      return signup();
      // return authDispatch({ type: 'auth_signup' });
    }
    return login();
    // return authDispatch({ type: 'auth_login' });
  };

  const switchBack = () => {
    return login();
    // return authDispatch({ type: 'auth_login' });
  };

  const redirectTo = () => {
    return forgotPassword();
    // return authDispatch({ type: 'forgot_password' });
  };

  return (
    <div css={{ padding: 24 }}>
      {status === 'fail' && (
        <div css={{ marginBottom: 16 }}>
          <Card variant={$CARD.again} />
        </div>
      )}
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>
            <Input
              variant={$INPUT.email}
              direction="bottom"
              handleChange={formik.handleChange}
              value={formik.values.email}
              errors={formik.errors.email !== undefined}
            />
            <Input
              variant={$INPUT.password}
              direction="top"
              handleChange={formik.handleChange}
              value={formik.values.password}
              errors={formik.errors.password !== undefined}
            />
          </div>
          <div>
            {formik.errors.email !== undefined && (
              <div css={{ marginTop: 6 }}>
                <Bullet
                  variant={$BULLET.required}
                  message={formik.errors.email}
                />
              </div>
            )}
          </div>
          <div>
            {formik.errors.password !== undefined && (
              <div css={{ marginTop: 6 }}>
                <Bullet
                  variant={$BULLET.required}
                  message={formik.errors.password}
                />
              </div>
            )}
          </div>
          {status === 'success' && (
            <div css={{ marginTop: 16 }}>
              <Card variant={$CARD.set} />
            </div>
          )}
        </div>
        <div css={{ margin: '16px 0' }}>
          <Button
            variant={$BUTTON.primary}
            title="Log in"
            loading={loading}
            block
          />
        </div>
        <div css={{ margin: '16px 0' }}>
          <Button
            variant={$BUTTON.underline}
            title="Forgot password?"
            onClick={redirectTo}
          />
        </div>
        <div css={{ margin: '16px 0' }}>
          <Button
            variant={$BUTTON.underline}
            title="More login options"
            onClick={switchBack}
          />
        </div>
        <div css={{ display: 'flex' }}>
          <p css={{ fontSize: 14, marginRight: 8 }}>Don't have an account?</p>
          <Button
            variant={$BUTTON.underline}
            title="Sign up"
            onClick={switchAuth}
          />
        </div>
      </form>
    </div>
  );
};

export const login = (props) => {
  return {
    login: {
      component: <LoginTemplate {...props} />,
      css: {},
    },
  };
};
