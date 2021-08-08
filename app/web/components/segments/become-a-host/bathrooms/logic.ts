import { useStayDispatch, useStayState } from "@context/stay";
import { useRouter } from "next/router";
import { useState } from "react";
import * as mockData from "./mock";

export const useBathroomsSegment = () => {
  const router = useRouter();
  const stayDispatch = useStayDispatch();
  const { bathrooms } = useStayState();
  const [data, _] = useState({
    bathrooms,
  });

  const handleRedirectToNextPage = () => {
    stayDispatch({
      type: "add",
      payload: {
        bathrooms: data.bathrooms,
      },
    });
    setTimeout(() => {
      router.push("/become-a-host/location");
    }, 500);
  };

  const handleRedirectToPreviousPage = () => {
    setTimeout(() => {
      router.push("/become-a-host/bedrooms");
    }, 500);
  };

  return {
    ...mockData,
    handleRedirectToPreviousPage,
    handleRedirectToNextPage,
  };
};
