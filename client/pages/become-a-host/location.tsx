import React, { useState } from "react";
import { Layout } from "layout/layout.component";
import { useStayDispatch, useStayState } from "../../context/stay";
import Router from "next/router";
import { Create } from "../../components/organisms/create/create.component";

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
      type="create"
      left={
        <Create
          title="Location"
          type="location"
          data={data}
          setData={setData}
        />
      }
      percentage={40}
      next={proceed}
      back={revert}
    />
  );
};

export default BedRoomsPage;
