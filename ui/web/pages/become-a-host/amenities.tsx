import React, { useState } from "react";
import Router from "next/router";

/** components */
import { Layout } from "layout/layout.component";
import { Prototype as CreatePrototype } from "../../components/prototype/create";

/** contexts */
import { useStayDispatch, useStayState } from "context/stay";

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
        <CreatePrototype
          title="Amenities"
          variant="amenities"
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
