import { useState } from 'react';
import Router from 'next/router';

import { Layout } from '@nextbnb/layout';
import { Prototype, $PROTOTYPE } from '@nextbnb/prototype';

import { useStayDispatch, useStayState } from '@context/stay';

const BathroomsPage = () => {
  const stayDispatch = useStayDispatch();
  const { bathrooms } = useStayState();
  const [data, setData] = useState({
    bathrooms,
  });

  const proceed = () => {
    stayDispatch({
      type: 'add',
      payload: {
        bathrooms: data.bathrooms,
      },
    });
    setTimeout(() => {
      Router.push('/become-a-host/location');
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push('/become-a-host/bedrooms');
    }, 500);
  };

  return (
    <Layout
      variant="create"
      left={
        <Prototype
          title="Property and guests"
          variant={$PROTOTYPE.bathrooms}
          data={data}
          setData={setData}
        />
      }
      percentage={15}
      next={proceed}
      back={revert}
    />
  );
};

export default BathroomsPage;
