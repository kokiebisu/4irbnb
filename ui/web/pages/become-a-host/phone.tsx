import React, { useState } from "react";
import { Layout } from "../../layout/layout.component";
import { useStayDispatch, useStayState } from "../../context/stay";
import Router from "next/router";
import { Create } from "../../components/prototype/create/create.component";

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
        <Create
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
