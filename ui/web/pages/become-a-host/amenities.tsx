import { useState } from "react";
import Router from "next/router";

import { Layout } from "@layout";
import { Prototype, $Prototype } from "@prototype/create";

import { useStayDispatch, useStayState } from "@context/stay";

const AmenitiesPage = () => {
  const stayDispatch = useStayDispatch();
  const { amenities, safeties } = useStayState();
  const [data, setData] = useState({
    amenities,
    safeties,
  });

  const proceed = () => {
    stayDispatch({
      type: "add",
      payload: data,
    });
    setTimeout(() => {
      Router.push("/become-a-host/spaces");
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/become-a-host/location");
    }, 500);
  };

  return (
    <Layout
      variant="create"
      left={
        <Prototype
          title="Amenities"
          variant={$Prototype.AMENITIES}
          data={data}
          setData={setData}
        />
      }
      percentage={25}
      next={proceed}
      back={revert}
    />
  );
};

export default AmenitiesPage;
