import React, { useEffect, useState } from "react";
import Router from "next/router";

/** contexts */
import { useStayDispatch, useStayState } from "../../context/stay";

/** components */
import { Create } from "../../components/organisms/create/create.component";
import {
  inputTypes,
  properties,
} from "../../components/atoms/input/logic/logic.types";

/** styles **/
import { Layout } from "../../layout/layout.component";

const RoomPage = () => {
  const stayDispatch = useStayDispatch();
  const { place, property, stay } = useStayState();

  const [data, setData] = useState({
    place,
    property,
    description: undefined,
    stay,
  });

  const proceed = () => {
    if (data.stay && data.property) {
      stayDispatch({
        type: "add",
        payload: {
          place: data.place,
          property: data.property,
          stay: data.stay,
        },
      });
      setTimeout(() => {
        Router.push("/become-a-host/bedrooms");
      }, 500);
    }
  };

  const revert = () => {
    console.log("revert called");
    setTimeout(() => {
      Router.push("/become-a-host");
    }, 500);
  };

  useEffect(() => {
    if (data.property) {
      setData({
        ...data,
        property: inputTypes[data.place].options[0].props.children,
      });
    }
  }, [data.place]);

  useEffect(() => {
    const displayDescription = () => {
      return properties[data.place].find((type) => type.name === data.property)
        .description;
    };
    if (data.property) {
      setData({ ...data, description: displayDescription() });
    }
  }, [data.property]);

  return (
    <Layout
      variant="create"
      left={
        <Create
          title="Property and guests"
          variant="room"
          data={data}
          setData={setData}
        />
      }
      percentage={10}
      next={proceed}
      back={revert}
      criteria={!data.place || !data.property}
    />
  );
};

export default RoomPage;
