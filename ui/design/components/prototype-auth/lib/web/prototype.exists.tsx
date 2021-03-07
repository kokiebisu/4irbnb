/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { useFormik } from 'formik';
import { Bullet, $BULLET } from '@nextbnb/atoms-bullet/dist/bundle.esm';
import { Button, $BUTTON } from '@nextbnb/atoms-button/dist/bundle.esm';
import { Input, $INPUT } from '@nextbnb/atoms-input';
import { validateExists as validate } from '@nextbnb/design/helper/validation';
import { usePost } from '@nextbnb/design/hooks/usePost';

const ExistsPrototype: React.FC<{
  data?: {
    imgUrl: string;
    firstname: string;
    email: string;
  };
  reload?: any;
}> = ({
  data = {
    imgUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?v=3',
    firstname: 'Kenichi',
    email: 'a01056715@gmail.com',
  },
  reload,
}) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
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
      });
      submit();
    },
  });

  return (
    <div css={{ padding: 24 }}>
      <div
        css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <div css={{ margin: '16px 0' }}>
          <p css={{ fontSize: 13, textAlign: 'center' }}>
            Looks like you already have an account. Please log in instead.
          </p>
        </div>
        <div css={{ margin: '16px 0' }}>
          <img css={{ width: 120, borderRadius: 9999 }} src={data.imgUrl} />
        </div>
        <div css={{ margin: '8px 0' }}>
          <div>
            <p css={{ fontSize: 13, textAlign: 'center' }}>{data.firstname}</p>
          </div>
          <div>
            <p css={{ fontSize: 13, textAlign: 'center' }}>{data.email}</p>
          </div>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div css={{ margin: '16px 0' }}>
          <Input
            variant={$INPUT.password}
            handleChange={formik.handleChange}
            value={formik.values.password}
            errors={formik.errors.password !== undefined}
          />
        </div>
        <div css={{ margin: '16px 0' }}>
          <Button variant={$BUTTON.primary} loading={loading} title="Log in" />
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
      </form>
      <div css={{ margin: '16px 0' }}>
        <Button
          variant={$BUTTON.underline}
          title="Login with a different account"
          onClick={() => alert('button pressed')}
        />
      </div>
      <div css={{ margin: '16px 0' }}>
        <Button
          variant={$BUTTON.underline}
          title="Forgot password?"
          onClick={() => alert('button pressed')}
        />
      </div>
    </div>
  );
};

export const exists = (props) => {
  return {
    exists: {
      component: <ExistsPrototype {...props} />,
      css: {},
    },
  };
};
