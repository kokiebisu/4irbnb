import { useStayDispatch, useStayState } from "@context/stay";
// import { inputTypes, properties } from '../../logic/logic.types';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useRoomSegment = () => {
  const router = useRouter();
  const stayDispatch = useStayDispatch();
  const { place, property, stay } = useStayState();

  const [data, setData] = useState({
    place: undefined,
    property,
    description: undefined,
    stay,
  });

  const handleRedirectToNextPage = () => {
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
        router.push("/become-a-host/bedrooms");
      }, 500);
    }
  };

  const handleRedirectToPreviousPage = () => {
    setTimeout(() => {
      router.push("/become-a-host");
    }, 500);
  };

  useEffect(() => {
    console.log("triggered", data.property);
    if (data.place) {
      // setData({
      //   ...data,
      //   property: inputTypes[data.place].options[0].props.children,
      // });
    }
  }, [data.place]);

  useEffect(() => {
    // const displayDescription = () => {
    //   return properties[data.place].find((type) => type.name === data.property)
    //     .description;
    // };
    // if (data.property) {
    //   setData({ ...data, description: displayDescription() });
    // }
  }, [data.property]);

  const canProceedToNextPage = !place || !property;

  const handleChange = (e: any, property: string) =>
    setData({ ...data, [property]: e.target.value });

  return {
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    canProceedToNextPage,
    handleChange,
  };
};
