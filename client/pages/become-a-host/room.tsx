import React, { useEffect, useState } from "react";
import Router from "next/router";

/** Contexts */
import { useStayDispatch } from "../../context/stay";

/** Components */
import { Create } from "../../components/organisms/create/create.component";
import {
  inputTypes,
  properties,
} from "../../components/atoms/input/logic/logic.types";

/** Styles */
import { Layout } from "../../layout/layout.component";

const RoomPage = () => {
  const stayDispatch = useStayDispatch();

  const [data, setData] = useState({
    place: undefined,
    property: undefined,
    description: undefined,
    stay: "Entire place",
  });

  const saveData = () => {
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
      }, 2000);
    }
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
      type="create"
      left={
        <Create
          title="Property and guests"
          type="kind"
          data={data}
          setData={setData}
          next={saveData}
        />
      }
    />
  );
};

export default RoomPage;
