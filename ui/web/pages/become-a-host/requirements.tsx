import React from "react";
import Router from "next/router";

/** components */
import { Layout } from "@layout";
import { Prototype as CreatePrototype } from "@prototype/create";

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
      left={<CreatePrototype title="Booking settings" variant="requirements" />}
      percentage={80}
      next={proceed}
      back={revert}
    />
  );
};

export default RequirementsPage;
