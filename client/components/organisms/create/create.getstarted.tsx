import React, { useState } from 'react';
import { Button } from '../../../components/atoms/button/button.component';
import { GetStartedCreateProps } from './props';

import font from '../../../styles/font.module.scss';
import color from '../../../styles/color.module.scss';
import space from '../../../styles/space.module.scss';
import { Input } from '../../../components/atoms/input/input.component';
import { useFormik } from 'formik';

export const GetStartedCreate: React.FC<GetStartedCreateProps> = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      place: 'Entire place',
      guests: 1,
      address: '',
    },
    onSubmit: async (values) => {
      setLoading(true);
      alert(JSON.stringify(values));
    },
  });
  return (
    <div>
      <div>
        <div className={[space['m-v--24']].join(' ')}>
          <h4 className={[font['size--28'], color['c--gray__2']].join(' ')}>
            Hi, Kenichi! Let's get started listing your space.
          </h4>
        </div>
        <div className={[space['m-v--8']].join(' ')}>
          <h3 className={[font['size--12'], color['c--gray__1']].join(' ')}>
            STEP 1
          </h3>
        </div>
        <div className={[space['m-b--16']].join(' ')}>
          <h4 className={[font['size--22'], color['c--gray__2']].join(' ')}>
            What kind of place do you have?
          </h4>
        </div>
        <div className={[space['m-b--10']].join(' ')}>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <Input type='place' />
            </div>
            <div
              className={[space['m-t--10']].join(' ')}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                columnGap: 10,
              }}>
              <div>
                <Input type='address' />
              </div>
              <div>
                <Input type='guests' />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div style={{ width: 150 }}>
        <div style={{ width: '100%' }}>
          <Button type='primary' title='Continue' size='sm' loading={loading} />
        </div>
      </div>
    </div>
  );
};
