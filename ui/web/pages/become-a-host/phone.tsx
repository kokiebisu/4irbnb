import React, { useState } from "react";
import Router from "next/router";

/** components */
import { Layout } from "@layout/layout.component";
import { Prototype as CreatePrototype } from "@prototype/create";

/** context */
import { useStayDispatch, useStayState } from "@context/stay";

const TitlePage = () => {
  const stayDispatch = useStayDispatch();
  const { phone } = useStayState();
  const [data, setData] = useState({
    phone,
  });

  const proceed = () => {
    stayDispatch({
      type: "add",
      payload: data,
    });
    setTimeout(() => {
      Router.push("/become-a-host/requirements");
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/become-a-host/description");
    }, 500);
  };

  return (
    <Layout
      variant="create"
      left={
        <CreatePrototype
          title="Description and title"
          variant="phone"
          data={data}
          setData={setData}
        />
      }
      percentage={80}
      next={proceed}
      back={revert}
      criteria={data.phone === 0}
      // criteria={...verify the number}
    />
  );
};

export default TitlePage;
