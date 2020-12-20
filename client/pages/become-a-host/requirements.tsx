import React, { useState } from "react";
import { Layout } from "../../layout/layout.component";
import { useStayDispatch, useStayState } from "../../context/stay";
import Router from "next/router";
import { Create } from "../../components/organisms/create/create.component";

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
      left={<Create title="Booking settings" variant="requirements" />}
      percentage={80}
      next={proceed}
      back={revert}
    />
  );
};

export default RequirementsPage;
