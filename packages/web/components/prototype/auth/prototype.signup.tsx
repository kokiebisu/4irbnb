import { useState } from 'react';
import { useFormik } from 'formik';
import Router from 'next/router';

import space from '@styles/space.module.scss';
import font from '@styles/font.module.scss';
import layout from '@styles/layout.module.scss';
import color from '@styles/color.module.scss';

import { Input, $Input } from '@input';
import { Button, $Button } from '@button';
import { Bullet, $Bullet } from '@bullet';

import { validateSignup as validate } from '@helper/auth';
import { usePost } from '@hooks/usePost';
import { useAuthDispatch } from '@context/auth';

/**
 * Renders the signup template component
 */
export const SignupTemplate: React.FC<{}> = () => {
  const authDispatch = useAuthDispatch();
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
          Router.reload();
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
      <div className="p-5">
        <div>
          <Input
            variant={$Input.NAME}
            direction="bottom"
            name="firstname"
            errors={formik.errors.firstname !== undefined}
            handleChange={formik.handleChange}
            value={formik.values.firstname}
          />
          <Input
            variant={$Input.NAME}
            direction="top"
            name="lastname"
            errors={formik.errors.lastname !== undefined}
            handleChange={formik.handleChange}
            value={formik.values.lastname}
          />
          <div>
            {formik.errors.firstname !== undefined ? (
              <div className={[space['m-t--6']].join(' ')}>
                <Bullet
                  variant={$Bullet.REQUIRED}
                  message={formik.errors.firstname}
                />
              </div>
            ) : null}
          </div>
          <div>
            {formik.errors.lastname !== undefined ? (
              <div className={[space['m-t--6']].join(' ')}>
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
                <p
                  className={[
                    space['m-t--8'],
                    font['size--11'],
                    color['c--gray__1'],
                  ].join(' ')}
                >
                  Make sure it matches the name on your government ID.
                </p>
              )}
          </div>
        </div>
        <div className={[space['m-t--22']].join(' ')}>
          <div
            style={{ border: '1px solid gray', borderRadius: 14 }}
            className={[layout['flex']].join(' ')}
          >
            <Input
              spread
              dateType="day"
              variant={$Input.BIRTHDATE}
              direction="left"
              handleChange={formik.handleChange}
              value={formik.values.day}
              errors={formik.errors.year !== undefined}
            />
            <Input
              spread
              dateType="month"
              variant={$Input.BIRTHDATE}
              direction="center"
              handleChange={formik.handleChange}
              value={formik.values.month}
              errors={formik.errors.year !== undefined}
            />
            <Input
              spread
              dateType="year"
              variant={$Input.BIRTHDATE}
              direction="right"
              handleChange={formik.handleChange}
              value={formik.values.year}
              errors={formik.errors.year !== undefined}
            />
          </div>
          {formik.errors.day !== undefined && (
            <div className="mt-2">
              <Bullet variant={$Bullet.REQUIRED} message={formik.errors.day} />
            </div>
          )}
          {formik.errors.month !== undefined && (
            <div className="mt-2">
              <Bullet
                variant={$Bullet.REQUIRED}
                message={formik.errors.month}
              />
            </div>
          )}
          {formik.errors.year !== undefined && (
            <div className="mt-2">
              <Bullet variant={$Bullet.REQUIRED} message={formik.errors.year} />
            </div>
          )}
        </div>
        {formik.errors.day !== undefined &&
          formik.errors.month !== undefined &&
          formik.errors.year !== undefined && (
            <p className="mt-2 text-xs text-gray-400">
              To sign up, you need to be at least 18. Your birthday won't be
              shared with other people who use Airbnb.
            </p>
          )}
        <div className="mt-5">
          <div>
            <Input
              variant={$Input.EMAIL}
              handleChange={formik.handleChange}
              value={formik.values.email}
              errors={formik.errors.email !== undefined}
            />
          </div>
          <div>
            {formik.errors.email !== undefined ? (
              <div className={[space['m-t--6']].join(' ')}>
                <Bullet
                  variant={$Bullet.REQUIRED}
                  message={formik.errors.email}
                />
              </div>
            ) : (
              <p className="mt-2 text-xs text-gray-300">
                We'll email you trip confirmations and receipts
              </p>
            )}
          </div>
        </div>
        <div className="mt-6">
          <div>
            <Input
              variant={$Input.PASSWORD}
              handleChange={formik.handleChange}
              value={formik.values.password}
              errors={formik.errors.password !== undefined}
            />
          </div>
          <div>
            {formik.errors.password !== undefined && (
              <div className="mt-2">
                <Bullet
                  variant={$Bullet.REQUIRED}
                  message={formik.errors.password}
                />
              </div>
            )}
          </div>
        </div>
        <div>
          <p className="mt-6 text-xs text-gray-500">
            By selecting <b>Agree and continue</b> below, I agree to Airbnb's{' '}
            <u className="font-medium text-blue-500">Terms of Service</u>,{' '}
            <u className="font-medium text-blue-500">
              Payments Terms of Service
            </u>
            , <u className="font-medium text-blue-500">Privacy Policy</u>, and{' '}
            <u className="font-medium text-blue-500">
              Nondiscrimination Policy
            </u>
            .
          </p>
        </div>
        <div className={[space['m-t--16']].join(' ')}>
          <Button
            variant={$Button.PRIMARY}
            title="Agree and continue"
            loading={loading}
            stretch
          />
        </div>
      </div>
    </form>
  );
};
