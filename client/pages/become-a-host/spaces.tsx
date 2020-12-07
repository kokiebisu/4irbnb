import React, { useState } from "react";
import { Layout } from "layout/layout.component";
import { useStayDispatch, useStayState } from "context/stay";
import Router from "next/router";
import { Create } from "../../components/organisms/create/create.component";

const AmenitiesPage = () => {
  const stayDispatch = useStayDispatch();
  const { spaces } = useStayState();
  const [data, setData] = useState({
    spaces,
  });

  const proceed = () => {
    stayDispatch({
      type: "add",
      payload: data,
    });
    setTimeout(() => {
      Router.push("/become-a-host/description");
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/become-a-host/amenities");
    }, 500);
  };

  return (
    <Layout
      type="create"
      left={
        <Create title="Amenities" type="spaces" data={data} setData={setData} />
      }
      percentage={50}
      next={proceed}
      back={revert}
    />
  );
};

export default AmenitiesPage;
