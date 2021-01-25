import Router from "next/router";

import { Layout } from "@layout";
import { Prototype } from "@prototype/create";
import * as $prototype from "@prototype/create/variants";

const RequirementsPage = () => {
  const proceed = () => {
    setTimeout(() => {
      Router.push("/become-a-host/rules");
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/become-a-host/phone");
    }, 500);
  };

  return (
    <Layout
      variant="create"
      left={
        <Prototype title="Booking settings" variant={$prototype.REQUIREMENTS} />
      }
      percentage={80}
      next={proceed}
      back={revert}
    />
  );
};

export default RequirementsPage;
