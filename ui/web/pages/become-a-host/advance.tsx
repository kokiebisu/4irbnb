import React, { useState } from "react";
import Router from "next/router";

import { Prototype, $Prototype } from "@airbnb/components/prototype/web/create";
import { Layout } from "@airbnb/components/layout/web";

import { useStayDispatch, useStayState } from "@context/stay";

const AdvancePage = () => {
  const stayDispatch = useStayDispatch();
  const { advance } = useStayState();
  const [data, setData] = useState({
    advance,
  });

  const proceed = () => {
    stayDispatch({
      type: "add",
      payload: data,
    });
    setTimeout(() => {
      Router.push("/become-a-host/period");
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/become-a-host/checkin");
    }, 500);
  };
  return (
    <Layout
      variant="create"
      title="Calendar and availability"
      left={
        <Prototype variant={$Prototype.ADVANCE} data={data} setData={setData} />
      }
      percentage={85}
      next={proceed}
      back={revert}
    />
  );
};

export default AdvancePage;
