import Router from 'next/router';

import { Layout } from '@layout';
import { Prototype, $Prototype } from '@template/become-a-host/create';

const BookingScenariosPage = () => {
  const proceed = () => {
    setTimeout(() => {
      Router.push('/become-a-host/price');
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push('/price');
    }, 500);
  };

  return (
    <Layout
      variant="create"
      title="Review"
      left={<Prototype variant={$Prototype.SCENARIOS} />}
      percentage={95}
      next={proceed}
      back={revert}
    />
  );
};

export default BookingScenariosPage;
