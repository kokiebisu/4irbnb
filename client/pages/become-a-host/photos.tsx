import React, { useState } from "react";
import Router from "next/router";

import { useStayDispatch, useStayState } from "@context/stay";
import { Layout } from "@layout/layout.component";
import { Create } from "@organisms/create/create.component";

const PhotosPage = () => {
  const stayDispatch = useStayDispatch();
  const { photo } = useStayState();
  const [data, setData] = useState({
    photo,
  });
  const [preview, setPreview] = useState("");

  console.log("photos data", data.photo);

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
      Router.push("/become-a-host/spaces");
    }, 500);
  };

  return (
    <Layout
      variant="create"
      title="Photos"
      left={<Create variant="photos" data={data} setData={setData} />}
      percentage={35}
      next={proceed}
      back={revert}
    />
  );
};

export default PhotosPage;
