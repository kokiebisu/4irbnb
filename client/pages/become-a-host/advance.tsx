import React, { useState } from "react";
import Router from "next/router";

/** components */
import { Create } from "components/organisms/create/create.component";
import { Layout } from "layout/layout.component";
import { useStayDispatch, useStayState } from "context/stay";

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
      left={<Create type="advance" data={data} setData={setData} />}
      percentage={85}
      next={proceed}
      back={revert}
    />
  );
};

export default AdvancePage;
