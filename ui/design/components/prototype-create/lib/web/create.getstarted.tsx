/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Router from 'next/router';
import { Button, $BUTTON } from '@nextbnb/atoms-button';
import { Input, $INPUT } from '@nextbnb/atoms-input';

/**
 * Renders the /become-a-host/get-started page content
 */
const GetStartedCreate: React.FC<{
  dispatchStay?: ({ type: string, payload: any }) => void;
}> = ({ dispatchStay }) => {
  const [loading, setLoading] = useState(false);
  const [stay, setStay] = useState('Entire place');

  const formik = useFormik({
    initialValues: {
      guests: 1,
      address: '',
    },
    onSubmit: async ({ guests, address }) => {
      setLoading(true);
      dispatchStay({
        type: 'add',
        payload: { stay, guests, address },
      });
      setTimeout(() => {
        Router.push('/become-a-host/room');
      }, 2000);
    },
  });

  return (
    <div>
      <div>
        <div css={{ margin: '24px 0' }}>
          <h4 css={{ fontSize: 28, color: 'grey.700' }}>
            Hi, Kenichi! Let's get started listing your space.
          </h4>
        </div>
        <div css={{ margin: '8px 0' }}>
          <h3 css={{ fontSize: 12, color: 'grey.600' }}>STEP 1</h3>
        </div>
        <div css={{ marginBottom: 16 }}>
          <h4 css={{ fontSize: 22, color: 'grey.700' }}>
            What kind of place do you have?
          </h4>
        </div>
        <div css={{ marginBottom: 10 }}>
          <form onSubmit={formik.handleSubmit}>
            <div
              css={{
                marginBottom: 10,
                display: 'grid',
                gridTemplateColumns: '1fr 130px',
                columnGap: 10,
              }}
            >
              <div>
                <Input
                  variant={$INPUT.place}
                  value={stay}
                  changePlace={setStay}
                />
              </div>
              <div>
                <Input
                  variant={$INPUT.guests}
                  handleChange={formik.handleChange}
                  value={formik.values.guests}
                />
              </div>
            </div>
            <div>
              <Input
                variant={$INPUT.address}
                handleChange={formik.handleChange}
                value={formik.values.address}
              />
            </div>
            <div css={{ marginTop: 16, width: 150 }}>
              <div css={{ width: '100%' }}>
                <Button
                  variant={$BUTTON.primary}
                  title="Continue"
                  size="sm"
                  loading={loading}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export const getstarted = (props) => {
  return {
    getstarted: {
      component: <GetStartedCreate {...props} />,
      css: {},
    },
  };
};
