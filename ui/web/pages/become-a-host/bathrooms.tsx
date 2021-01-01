import React, { useState } from "react";
import Router from "next/router";

/** components */
import { Layout } from "@layout";
import { Prototype as CreatePrototype } from "@prototype/create";

/** contexts */
import { useStayDispatch, useStayState } from "@context/stay";

const BathroomsPage = () => {
  const stayDispatch = useStayDispatch();
  const { bathrooms } = useStayState();
  const [data, setData] = useState({
    bathrooms,
  });

  const proceed = () => {
    stayDispatch({
      type: "add",
      payload: {
        bathrooms: data.bathrooms,
      },
    });
    setTimeout(() => {
      Router.push("/become-a-host/location");
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/become-a-host/bedrooms");
    }, 500);
  };

  return (
    <Layout
      variant="create"
      left={
        <CreatePrototype
          title="Property and guests"
          variant="bathrooms"
          data={data}
          setData={setData}
        />
      }
      percentage={15}
      next={proceed}
      back={revert}
    />
  );
};

export default BathroomsPage;
