import { useState } from "react";
import Router from "next/router";

import { Layout } from "@layout";
import { Prototype as CreatePrototype } from "@prototype/create";

import { useStayDispatch, useStayState } from "@context/stay";

const BedRoomsPage = () => {
  const stayDispatch = useStayDispatch();
  const { guests, bedrooms, beds } = useStayState();
  const [data, setData] = useState({
    guests,
    bedrooms,
    beds,
  });

  const proceed = () => {
    stayDispatch({
      type: "add",
      payload: {
        guests: data.guests,
        bedrooms: data.bedrooms,
        beds: data.beds,
      },
    });
    setTimeout(() => {
      Router.push("/become-a-host/bathrooms");
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/become-a-host/room");
    }, 500);
  };

  return (
    <Layout
      variant="create"
      left={
        <CreatePrototype
          title="Property and guests"
          variant="bedrooms"
          data={data}
          setData={setData}
        />
      }
      percentage={10}
      next={proceed}
      back={revert}
    />
  );
};

export default BedRoomsPage;
