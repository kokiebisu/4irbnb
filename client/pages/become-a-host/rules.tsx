import React, { useState } from "react";
import { Layout } from "layout/layout.component";
import { useStayDispatch, useStayState } from "context/stay";
import Router from "next/router";
import { Create } from "../../components/organisms/create/create.component";

const DescriptionPage = () => {
  const stayDispatch = useStayDispatch();
  const { smoking, events, details } = useStayState();
  const [data, setData] = useState({
    smoking,
    events,
    details,
  });

  const proceed = () => {
    stayDispatch({
      type: "add",
      payload: data,
    });
    setTimeout(() => {
      Router.push("/become-a-host/review-how-guests-book");
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
        <Create
          title="Booking settings"
          variant="rules"
          data={data}
          setData={setData}
        />
      }
      percentage={70}
      next={proceed}
      back={revert}
      criteria={
        typeof data.events === "undefined" &&
        typeof data.smoking === "undefined"
      }
    />
  );
};

export default DescriptionPage;
