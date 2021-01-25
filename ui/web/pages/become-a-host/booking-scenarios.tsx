import Router from "next/router";

import { Layout } from "@layout";
import { Prototype } from "@prototype/create";

import * as $prototype from "@prototype/create/variants";

const BookingScenariosPage = () => {
  const proceed = () => {
    setTimeout(() => {
      Router.push("/become-a-host/price");
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/price");
    }, 500);
  };

  return (
    <Layout
      variant="create"
      title="Review"
      left={<Prototype variant={$prototype.SCENARIOS} />}
      percentage={95}
      next={proceed}
      back={revert}
    />
  );
};

export default BookingScenariosPage;
