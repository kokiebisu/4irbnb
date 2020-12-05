import React, { useState } from "react";
import { Layout } from "layout/layout.component";
import { useStayDispatch, useStayState } from "context/stay";
import Router from "next/router";
import { Create } from "../../components/organisms/create/create.component";

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
      type="create"
      left={
        <Create
          title="Property and guests"
          type="bathrooms"
          data={data}
          setData={setData}
        />
      }
      percentage={30}
      next={proceed}
      back={revert}
    />
  );
};

export default BathroomsPage;
