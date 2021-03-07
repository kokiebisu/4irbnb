/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { useFormik } from 'formik';
import { Input, $INPUT } from '@nextbnb/atoms-input';
import { Button, $BUTTON } from '@nextbnb/atoms-button';
import { Bullet, $Bullet } from '@nextbnb/atoms-bullet';

import { validateSignup as validate } from '@nextbnb/design/helper/validation';
import { usePost } from '@nextbnb/design/hooks/usePost';

/**
 * Renders the signup template component
 */
const SignupTemplate: React.FC<{ authDispatch?: any }> = ({ authDispatch }) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      day: '',
      month: '',
      year: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: async (values) => {
      const submit = await usePost({
        url: '/api/users/signup',
        body: values,
        triggerLoading: (state) => {
          setLoading(state);
        },
        onSuccess: () => {
          reload();
        },
        onFail: () => {
          authDispatch({ type: 'exists' });
        },
      });

      await submit();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div css={{ padding: 24 }}>
        <div>
          <Input
            variant={$INPUT.name}
            direction="bottom"
            name="firstname"
            errors={formik.errors.firstname !== undefined}
            handleChange={formik.handleChange}
            value={formik.values.firstname}
          />
          <Input
            variant={$INPUT.name}
            direction="top"
            name="lastname"
            errors={formik.errors.lastname !== undefined}
            handleChange={formik.handleChange}
            value={formik.values.lastname}
          />
          <div>
            {formik.errors.firstname !== undefined ? (
              <div css={{ marginTop: 6 }}>
                <Bullet
                  variant={$Bullet.REQUIRED}
                  message={formik.errors.firstname}
                />
              </div>
            ) : null}
          </div>
          <div>
            {formik.errors.lastname !== undefined ? (
              <div css={{ marginTop: 6 }}>
                <Bullet
                  variant={$Bullet.REQUIRED}
                  message={formik.errors.lastname}
                />
              </div>
            ) : null}
          </div>
          <div>
            {formik.errors.firstname === undefined &&
              formik.errors.lastname === undefined && (
                <p css={{ marginTop: 8, fontSize: 11, color: 'grey.600' }}>
                  Make sure it matches the name on your government ID.
                </p>
              )}
          </div>
        </div>
        <div css={{ marginTop: 22 }}>
          <div
            css={{
              border: '1px solid gray',
              borderRadius: 14,
              display: 'flex',
            }}
          >
            <Input
              spread
              dateType="day"
              variant={$INPUT.birthdate}
              direction="left"
              handleChange={formik.handleChange}
              value={formik.values.day}
              errors={formik.errors.year !== undefined}
            />
            <Input
              spread
              dateType="month"
              variant={$INPUT.birthdate}
              direction="center"
              handleChange={formik.handleChange}
              value={formik.values.month}
              errors={formik.errors.year !== undefined}
            />
            <Input
              spread
              dateType="year"
              variant={$INPUT.birthdate}
              direction="right"
              handleChange={formik.handleChange}
              value={formik.values.year}
              errors={formik.errors.year !== undefined}
            />
          </div>
          {formik.errors.day !== undefined && (
            <div css={{ marginTop: 6 }}>
              <Bullet variant={$Bullet.REQUIRED} message={formik.errors.day} />
            </div>
          )}
          {formik.errors.month !== undefined && (
            <div css={{ marginTop: 6 }}>
              <Bullet
                variant={$Bullet.REQUIRED}
                message={formik.errors.month}
              />
            </div>
          )}
          {formik.errors.year !== undefined && (
            <div css={{ marginTop: 6 }}>
              <Bullet variant={$Bullet.REQUIRED} message={formik.errors.year} />
            </div>
          )}
        </div>
        {formik.errors.day !== undefined &&
          formik.errors.month !== undefined &&
          formik.errors.year !== undefined && (
            <p css={{ marginTop: 6, fontSize: 11, color: 'grey.600' }}>
              To sign up, you need to be at least 18. Your birthday won't be
              shared with other people who use Airbnb.
            </p>
          )}
        <div css={{ marginTop: 22 }}>
          <div>
            <Input
              variant={$INPUT.email}
              handleChange={formik.handleChange}
              value={formik.values.email}
              errors={formik.errors.email !== undefined}
            />
          </div>
          <div>
            {formik.errors.email !== undefined ? (
              <div css={{ marginTop: 6 }}>
                <Bullet
                  variant={$Bullet.REQUIRED}
                  message={formik.errors.email}
                />
              </div>
            ) : (
              <p
                css={{
                  marginTop: 8,
                  fontSize: 11,
                  color: 'grey.600',
                }}
              >
                We'll email you trip confirmations and receipts
              </p>
            )}
          </div>
        </div>
        <div css={{ marginTop: 22 }}>
          <div>
            <Input
              variant={$INPUT.password}
              handleChange={formik.handleChange}
              value={formik.values.password}
              errors={formik.errors.password !== undefined}
            />
          </div>
          <div>
            {formik.errors.password !== undefined && (
              <div css={{ marginTop: 6 }}>
                <Bullet
                  variant={$Bullet.REQUIRED}
                  message={formik.errors.password}
                />
              </div>
            )}
          </div>
        </div>
        <div>
          <p css={{ marginTop: 22, fontSize: 11, color: 'grey.600' }}>
            By selecting <b>Agree and continue</b> below, I agree to Airbnb's{' '}
            <u css={{ fontWeight: 500, color: '#1B4CC4' }}>Terms of Service</u>,{' '}
            <u css={{ fontWeight: 500, color: '#1B4CC4' }}>
              Payments Terms of Service
            </u>
            , <u css={{ fontWeight: 500, color: '#1B4CC4' }}>Privacy Policy</u>,
            and{' '}
            <u css={{ fontWeight: 500, color: '#1B4CC4' }}>
              Nondiscrimination Policy
            </u>
            .
          </p>
        </div>
        <div css={{ marginTop: 16 }}>
          <Button
            variant={$BUTTON.primary}
            title="Agree and continue"
            loading={loading}
            block
          />
        </div>
      </div>
    </form>
  );
};

export const signup = (props) => {
  return {
    signup: {
      component: <SignupTemplate {...props} />,
      css: {},
    },
  };
};
