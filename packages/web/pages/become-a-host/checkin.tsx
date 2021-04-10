import { useState } from 'react';
import Router from 'next/router';

import { Prototype, $Prototype } from '@template/become-a-host/create';
import { Layout } from '@layout';

import { useStayDispatch, useStayState } from '@context/stay';

const CheckInPage = () => {
  const stayDispatch = useStayDispatch();
  const { notice, checkinFrom, checkinTo } = useStayState();
  const [data, setData] = useState({
    notice,
    checkinFrom,
    checkinTo,
  });

  const proceed = () => {
    stayDispatch({
      type: 'add',
      payload: data,
    });
    setTimeout(() => {
      Router.push('/become-a-host/advance');
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push('/become-a-host/review-how-guests-book');
    }, 500);
  };
  return (
    <Layout
      variant="create"
      title="Calendar and availability"
      left={
        <Prototype variant={$Prototype.CHECKIN} data={data} setData={setData} />
      }
      percentage={80}
      next={proceed}
      back={revert}
    />
  );
};

export default CheckInPage;
