import { useState } from 'react';
import Router from 'next/router';

import { Layout } from '@nextbnb/layout';
import { Prototype, $PROTOTYPE } from '@nextbnb/prototype';

import { useStayDispatch, useStayState } from '@context/stay';

const BedRoomsPage = () => {
  const stayDispatch = useStayDispatch();
  const { country, street, apt, city, state, postal } = useStayState();
  const [data, setData] = useState({
    country,
    street,
    apt,
    city,
    state,
    postal,
  });

  const proceed = () => {
    stayDispatch({
      type: 'add',
      payload: data,
    });
    setTimeout(() => {
      Router.push('/become-a-host/amenities');
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push('/become-a-host/bathrooms');
    }, 500);
  };

  return (
    <Layout
      variant="create"
      left={
        <Prototype
          title="Location"
          variant={$PROTOTYPE.location}
          data={data}
          setData={setData}
        />
      }
      percentage={20}
      next={proceed}
      back={revert}
      criteria={
        data.street === '' ||
        data.city === '' ||
        data.state === '' ||
        data.postal === ''
      }
    />
  );
};

export default BedRoomsPage;
