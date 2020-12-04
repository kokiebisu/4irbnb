import React, { useState } from "react";
import { Layout } from "layout/layout.component";
import { useStayDispatch } from "context/stay";
import Router from "next/router";
import { Create } from "../../components/organisms/create/create.component";

const BedRoomsPage = () => {
  const stayDispatch = useStayDispatch();
  const [data, setData] = useState({
    guests: 1,
    bedrooms: 0,
    beds: 1,
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
      Router.push("/become-a-host/bedrooms");
    }, 2000);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/become-a-host/room");
    }, 2000);
  };

  return (
    <Layout
      type="create"
      left={
        <Create
          title="Property and guests"
          type="bedrooms"
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
