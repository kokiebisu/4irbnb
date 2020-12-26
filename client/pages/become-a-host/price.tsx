import React, { useState } from "react";
import { Layout } from "layout/layout.component";
import { useStayDispatch, useStayState } from "../../context/stay";
import Router from "next/router";
import { Create } from "../../components/organisms/create/create.component";

const PricePage = () => {
  const stayDispatch = useStayDispatch();
  const { basePrice, currency } = useStayState();
  const [data, setData] = useState({
    basePrice,
    currency,
  });

  const proceed = () => {
    stayDispatch({
      type: "add",
      payload: data,
    });
    setTimeout(() => {
      Router.push("/become-a-host/booking-scenarios");
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/period");
    }, 500);
  };

  return (
    <Layout
      variant="create"
      title="Pricing"
      left={<Create variant="price" data={data} setData={setData} />}
      percentage={90}
      next={proceed}
      back={revert}
    />
  );
};

export default PricePage;
