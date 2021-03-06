import { useState } from 'react';
import Router from 'next/router';

import { Layout } from '@nextbnb/layout';
import { Prototype, $PROTOTYPE } from '@nextbnb/prototype';

import { useStayDispatch, useStayState } from '@context/stay';

const DescriptionPage = () => {
  const stayDispatch = useStayDispatch();
  const { description } = useStayState();
  const [data, setData] = useState({
    description,
  });

  const proceed = () => {
    stayDispatch({
      type: 'add',
      payload: data,
    });
    setTimeout(() => {
      Router.push('/become-a-host/title');
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push('/become-a-host/spaces');
    }, 500);
  };

  return (
    <Layout
      variant="create"
      left={
        <Prototype
          title="Description and title"
          variant={$PROTOTYPE.description}
          data={data}
          setData={setData}
        />
      }
      percentage={60}
      next={proceed}
      back={revert}
      criteria={data.description.length === 0 || data.description.length >= 500}
    />
  );
};

export default DescriptionPage;
