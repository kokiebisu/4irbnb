import React, { useState } from "react";
import Router from "next/router";

/** context */
import { useStayDispatch, useStayState } from "@context/stay";

/** components */
import { Layout } from "@layout/layout.component";
import { Prototype as CreatePrototype } from "@prototype/create";

const PhotosPage = () => {
  const stayDispatch = useStayDispatch();
  const { photos } = useStayState();
  const [data, setData] = useState({
    photos,
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
      Router.push("/become-a-host/spaces");
    }, 500);
  };

  return (
    <Layout
      variant="create"
      title="Photos"
      left={<CreatePrototype variant="photos" data={data} setData={setData} />}
      percentage={35}
      next={proceed}
      back={revert}
    />
  );
};

export default PhotosPage;
