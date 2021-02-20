import { useState } from "react";
import Router from "next/router";

import { Layout } from "@airbnb/components/layout/web";
import { Prototype, $Prototype } from "@airbnb/components/prototype/web/create";

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
        <Prototype
          title="Description and title"
          variant={$Prototype.TITLE}
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
