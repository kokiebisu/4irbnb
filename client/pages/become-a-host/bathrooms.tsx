import React, { useState } from "react";
import { Layout } from "layout/layout.component";
import { useStayDispatch } from "context/stay";
import Router from "next/router";
import { Create } from "../../components/organisms/create/create.component";

const BathroomsPage = () => {
  const stayDispatch = useStayDispatch();
  const [data, setData] = useState({
    bathrooms: 1,
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
    }, 2000);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/become-a-host/bedrooms");
    }, 2000);
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
      percentage={20}
      next={proceed}
      back={revert}
    />
  );
};

export default BathroomsPage;
