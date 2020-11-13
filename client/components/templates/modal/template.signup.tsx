import { useAuthDispatch, useAuthState } from '../../../context/auth';
import { useFormik } from 'formik';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import React, { useState } from 'react';

import space from '../../../styles/space.module.scss';
import shape from '../../../styles/shape.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import color from '../../../styles/color.module.scss';
import modalStyles from '../../organisms/modal/modal.module.scss';
import { Input } from '../../../components/atoms/input/input.component';
import { Button } from '../../../components/atoms/button/button.component';
import { SignupTemplateProps } from '../props';
import { Animation } from '../../animation/animation.component';

export const SignupTemplate: React.FC<SignupTemplateProps> = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      birthdate: '',
      email: '',
      password: '',
    },

    onSubmit: async () => {
      const response = await fetch('http://localhost:8080/users/signup', {
        method: 'POST',
        body: JSON.stringify(formik.values),
      });
      console.log('response', response);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={[space['p--24']].join(' ')}>
        <div>
          <Input
            criteria=''
            type='text'
            direction='bottom'
            placeholder='First name'
            name='firstname'
            inputType='text'
            handleChange={formik.handleChange}
            value={formik.values.firstname}
          />
          <Input
            type='text'
            direction='top'
            placeholder='Last name'
            name='lastname'
            inputType='text'
            handleChange={formik.handleChange}
            value={formik.values.lastname}
          />
          <p
            className={[
              space['m-t--8'],
              font['size--11'],
              color['c--gray__1'],
            ].join(' ')}>
            Make sure it matches the name on your government ID.
          </p>
        </div>
        <div className={[space['m-t--22']].join(' ')}>
          <div>
            <Input
              type='text'
              placeholder='Birth date'
              name='birthdate'
              inputType='date'
              handleChange={formik.handleChange}
              value={formik.values.birthdate}
            />
          </div>
          <p
            className={[
              space['m-t--8'],
              font['size--11'],
              color['c--gray__1'],
            ].join(' ')}>
            To sign up, you need to be at least 18. Your birthday won't be
            shared with other people who use Airbnb.
          </p>
        </div>
        <div className={[space['m-t--22']].join(' ')}>
          <div>
            <Input
              type='text'
              placeholder='Email'
              name='email'
              inputType='text'
              handleChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <p
            className={[
              space['m-t--8'],
              font['size--11'],
              color['c--gray__1'],
            ].join(' ')}>
            We'll email you trip confirmations and receipts
          </p>
        </div>
        <div className={[space['m-t--22']].join(' ')}>
          <div>
            <Input
              type='password'
              placeholder='Password'
              name='password'
              inputType='password'
              errors={formik.errors.password}
              handleChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <p
            className={[
              space['m-t--22'],
              font['size--11'],
              color['c--gray__1'],
            ].join(' ')}>
            By selecting <b>Agree and continue</b> below, I agree to Airbnb's{' '}
            <u
              className={[font['weight--500']].join(' ')}
              style={{ color: '#1B4CC4' }}>
              Terms of Service
            </u>
            ,{' '}
            <u
              className={[font['weight--500']].join(' ')}
              style={{ color: '#1B4CC4' }}>
              Payments Terms of Service
            </u>
            ,{' '}
            <u
              className={[font['weight--500']].join(' ')}
              style={{ color: '#1B4CC4' }}>
              Privacy Policy
            </u>
            , and{' '}
            <u
              className={[font['weight--500']].join(' ')}
              style={{ color: '#1B4CC4' }}>
              Nondiscrimination Policy
            </u>
            .
          </p>
        </div>
        <div className={[space['m-t--16']].join(' ')}>
          <Button
            type='primary'
            size='md'
            title={
              loading ? (
                <div
                  className={[
                    layout['flex'],
                    layout['items-center'],
                    layout['justify-center'],
                  ].join(' ')}>
                  <Animation type='loading' />
                </div>
              ) : (
                <h4>Agree and continue</h4>
              )
            }
          />
        </div>
      </div>
    </form>
  );
};
