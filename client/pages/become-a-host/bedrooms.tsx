import React, { useState } from "react";
import { Layout } from "layout/layout.component";
import { useStayDispatch, useStayState } from "context/stay";
import Router from "next/router";
import { Create } from "../../components/organisms/create/create.component";

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
      type="create"
      left={
        <Create
          title="Property and guests"
          variant="bedrooms"
          data={data}
          setData={setData}
        />
      }
      percentage={20}
      next={proceed}
      back={revert}
    />
  );
};

export default BedRoomsPage;
