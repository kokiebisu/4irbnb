import React, { useState } from "react";
import Router from "next/router";

/** components */
import { Prototype as CreatePrototype } from "@prototype/create";
import { Layout } from "@layout/layout.component";

/** contexts */
import { useStayDispatch, useStayState } from "@context/stay";

const CheckInPage = () => {
  const stayDispatch = useStayDispatch();
  const { notice, checkinFrom, checkinTo } = useStayState();
  const [data, setData] = useState({
    notice,
    checkinFrom,
    checkinTo,
  });

  const proceed = () => {
    stayDispatch({
      type: "add",
      payload: data,
    });
    setTimeout(() => {
      Router.push("/become-a-host/advance");
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/become-a-host/review-how-guests-book");
    }, 500);
  };
  return (
    <Layout
      variant="create"
      title="Calendar and availability"
      left={<CreatePrototype variant="checkin" data={data} setData={setData} />}
      percentage={80}
      next={proceed}
      back={revert}
    />
  );
};

export default CheckInPage;
