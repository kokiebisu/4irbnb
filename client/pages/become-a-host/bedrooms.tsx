import React, { useState } from "react";
import { Layout } from "layout/layout.component";
import { useStayDispatch } from "context/stay";
import Router from "next/router";

const BedRoomsPage = () => {
  const stayDispatch = useStayDispatch();
  const [data, setData] = useState({
    guests: 1,
    bedrooms: "Studio",
    beds: 1,
  });

  const saveData = () => {
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

  return (
    <Layout
      type="create"
      left={
        <Create type="bedrooms" data={data} setData={setData} next={saveData} />
      }
    />
  );
};

export default BedRoomsPage;
