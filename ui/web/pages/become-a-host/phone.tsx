import { useState } from "react";
import Router from "next/router";

import { Layout } from "@layout";
import { Prototype } from "@prototype/create";

import { useStayDispatch, useStayState } from "@context/stay";
import * as $prototype from "@prototype/create/variants";

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
        <Prototype
          title="Description and title"
          variant={$prototype.PHONE}
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
