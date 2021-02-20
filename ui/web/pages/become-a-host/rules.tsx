import { useState } from "react";
import Router from "next/router";
import { Layout } from "@airbnb/components/layout/web";
import { Prototype, $Prototype } from "@airbnb/components/prototype/web/create";
import { useStayDispatch, useStayState } from "@context/stay";

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
        <Prototype
          title="Booking settings"
          variant={$Prototype.RULES}
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
