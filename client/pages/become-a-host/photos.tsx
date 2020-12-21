import React, { useState } from "react";
import Router from "next/router";

import { useStayDispatch, useStayState } from "@context/stay";
import { Layout } from "@layout/layout.component";

const PhotosPage = () => {
  const stayDispatch = useStayDispatch();
  const { photo } = useStayState();
  const [data, setData] = useState({
    photo,
  });

  const proceed = () => {
    stayDispatch({
      type: "add",
      payload: data,
    });
    setTimeout(() => {
      Router.push("/become-a-host/title");
    }, 500);
  };

  const revert = () => {
    setTimeout(() => {
      Router.push("/become-a-host/spaces");
    }, 500);
  };

  return (
    <Layout
      variant="create"
      title="Photos"
      left={<Create variant="photo" data={data} setData={setData} />}
      percentage={90}
      next={proceed}
      back={revert}
    />
  );
};

export default PhotosPage;
