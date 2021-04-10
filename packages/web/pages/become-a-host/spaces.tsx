import { useState } from 'react';
import Router from 'next/router';

import { Layout } from '@layout';
import { Prototype, $Prototype } from '@template/become-a-host/create';

import { useStayDispatch, useStayState } from '@context/stay';

const AmenitiesPage = () => {
  const stayDispatch = useStayDispatch();
  const { spaces } = useStayState();
  const [data, setData] = useState({
    spaces,
  });

  const proceed = () => {
    stayDispatch({
      type: 'add',
      payload: data,
    });
    setTimeout(() => {
      Router.push('/become-a-host/photos');
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push('/become-a-host/amenities');
    }, 500);
  };

  return (
    <Layout
      variant="create"
      left={
        <Prototype
          title="Amenities"
          variant={$Prototype.SPACES}
          data={data}
          setData={setData}
        />
      }
      percentage={30}
      next={proceed}
      back={revert}
    />
  );
};

export default AmenitiesPage;
