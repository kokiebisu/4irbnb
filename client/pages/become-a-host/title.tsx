import React, { useState } from "react";
import { Layout } from "layout/layout.component";
import { useStayDispatch, useStayState } from "context/stay";
import Router from "next/router";
import { Create } from "../../components/organisms/create/create.component";

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
      type="create"
      left={
        <Create
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
