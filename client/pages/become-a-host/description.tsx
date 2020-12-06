import React, { useState } from "react";
import { Layout } from "layout/layout.component";
import { useStayDispatch, useStayState } from "context/stay";
import Router from "next/router";
import { Create } from "../../components/organisms/create/create.component";

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
      type="create"
      left={
        <Create
          title="Description and title"
          type="description"
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
