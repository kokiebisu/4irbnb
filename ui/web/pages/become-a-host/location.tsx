import { useState } from "react";
import Router from "next/router";

import { Layout } from "@layout";
import { Prototype } from "@prototype/create";

import { useStayDispatch, useStayState } from "@context/stay";

import * as $prototype from "@prototype/create/variants";

const BedRoomsPage = () => {
  const stayDispatch = useStayDispatch();
  const { country, street, apt, city, state, postal } = useStayState();
  const [data, setData] = useState({
    country,
    street,
    apt,
    city,
    state,
    postal,
  });

  const proceed = () => {
    stayDispatch({
      type: "add",
      payload: data,
    });
    setTimeout(() => {
      Router.push("/become-a-host/amenities");
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/become-a-host/bathrooms");
    }, 500);
  };

  return (
    <Layout
      variant="create"
      left={
        <Prototype
          title="Location"
          variant={$prototype.LOCATION}
          data={data}
          setData={setData}
        />
      }
      percentage={20}
      next={proceed}
      back={revert}
      criteria={
        data.street === "" ||
        data.city === "" ||
        data.state === "" ||
        data.postal === ""
      }
    />
  );
};

export default BedRoomsPage;
