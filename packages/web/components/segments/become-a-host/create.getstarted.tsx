import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import Router from 'next/router';

import { Button, $Button } from '@button';
import { Input, $Input } from '@input';

import { useStayDispatch } from '@context/stay';

export interface GetStartedBecomeAHostTemplate {
  loading?: () => void;
  handleLoadingChange?: () => void;
  stay?: () => void;
  handleStayChange?: () => void;
  handleSubmit?: () => void;
  address?: () => void;
  handleAddressChang?: () => voide;
}

/**
 * Renders the /become-a-host/get-started page content
 */
export const GetStartedCreate: React.FC<{}> = ({
  loading,
  handleLoadingChange,
  stay,
  handleStayChange,
  handleSubmit,
  address,
  handleAddressChange,
}) => {
  const [loading, setLoading] = useState(false);
  const [stay, setStay] = useState('Entire place');
  const dispatchStay = useStayDispatch();
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

  useEffect(() => {
    dispatchStay({
      type: 'reset',
      payload: { place: 'Entire place', guests: 0, address: '' },
    });
  }, []);

  return (
    <div>
      <div>
        <div className="my-5">
          <h4 className="text-2xl text-gray-700">
            Hi, Kenichi! Let's get started listing your space.
          </h4>
        </div>
        <div className="my-3">
          <h3 className="text-xs text-gray-600">STEP 1</h3>
        </div>
        <div className="mb-4">
          <h4 className="text-lg text-gray-500">
            What kind of place do you have?
          </h4>
        </div>
        <div className="mb-3">
          <form onSubmit={formik.handleSubmit}>
            <div
              className="mb-3 grid gap-3"
              style={{
                gridTemplateColumns: '1fr 130px',
              }}
            >
              <div>
                <Input
                  variant={$Input.PLACE}
                  value={stay}
                  changePlace={setStay}
                />
              </div>
              <div>
                <Input
                  variant={$Input.GUESTS}
                  handleChange={formik.handleChange}
                  value={formik.values.guests}
                />
              </div>
            </div>
            <div>
              <Input
                variant={$Input.ADDRESS}
                handleChange={formik.handleChange}
                value={formik.values.address}
              />
            </div>
            <div className="mt-4" style={{ width: 150 }}>
              <div className="w-full">
                <Button
                  variant={$Button.PRIMARY}
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
