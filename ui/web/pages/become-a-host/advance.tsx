import React, { useState } from "react";
import Router from "next/router";

import { Prototype as CreatePrototype } from "@prototype/create";
import { Layout } from "@layout";

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
      left={<CreatePrototype variant="advance" data={data} setData={setData} />}
      percentage={85}
      next={proceed}
      back={revert}
    />
  );
};

export default AdvancePage;
