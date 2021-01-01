import React, { useState } from "react";
import Router from "next/router";

/** components */
import { Layout } from "@layout";
import { Prototype as CreatePrototype } from "@prototype/create";

/** context */
import { useStayDispatch, useStayState } from "@context/stay";

const TitlePage = () => {
  const stayDispatch = useStayDispatch();
  const { title } = useStayState();
  const [data, setData] = useState({
    title,
  });

  const proceed = () => {
    stayDispatch({
      type: "add",
      payload: data,
    });
    setTimeout(() => {
      Router.push("/become-a-host/phone");
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
          variant="title"
          data={data}
          setData={setData}
        />
      }
      percentage={70}
      next={proceed}
      back={revert}
      criteria={data.title === "" || data.title.length >= 50}
    />
  );
};

export default TitlePage;
