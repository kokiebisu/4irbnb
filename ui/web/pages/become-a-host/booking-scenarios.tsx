import React from "react";
import Router from "next/router";

/** components */
import { Layout } from "layout/layout.component";
import { Prototype as CreatePrototype } from "@prototype/create";

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
      left={<CreatePrototype variant="scenarios" />}
      percentage={95}
      next={proceed}
      back={revert}
    />
  );
};

export default BookingScenariosPage;
