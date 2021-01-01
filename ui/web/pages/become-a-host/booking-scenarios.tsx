import React from "react";
import { Layout } from "layout/layout.component";
import Router from "next/router";
import { Create } from "../../components/prototype/create/create.component";

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
      left={<Create variant="scenarios" />}
      percentage={95}
      next={proceed}
      back={revert}
    />
  );
};

export default BookingScenariosPage;
