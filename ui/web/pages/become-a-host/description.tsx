import React, { useState } from "react";
import Router from "next/router";

/** components */
import { Layout } from "@layout/layout.component";
import { Prototype as CreatePrototype } from "@prototype/create";

/** contexts */
import { useStayDispatch, useStayState } from "@context/stay";

const DescriptionPage = () => {
  const stayDispatch = useStayDispatch();
  const { description } = useStayState();
  const [data, setData] = useState({
    description,
  });

  const proceed = () => {
    stayDispatch({
      type: "add",
      payload: data,
    });
    setTimeout(() => {
      Router.push("/become-a-host/title");
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/become-a-host/spaces");
    }, 500);
  };

  return (
    <Layout
      variant="create"
      left={
        <CreatePrototype
          title="Description and title"
          variant="description"
          data={data}
          setData={setData}
        />
      }
      percentage={60}
      next={proceed}
      back={revert}
      criteria={data.description.length === 0 || data.description.length >= 500}
    />
  );
};

export default DescriptionPage;
