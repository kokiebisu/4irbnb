import { useState } from "react";
import Router from "next/router";

import { Layout } from "@layout";
import { Prototype } from "@prototype/create";

import { useStayDispatch, useStayState } from "@context/stay";

import * as $prototype from "@prototype/create/variants";

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
        <Prototype
          title="Property and guests"
          variant={$prototype.BATHROOMS}
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
