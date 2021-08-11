import { useStayDispatch, useStayState } from "@context/stay";
import { useRouter } from "next/router";
import { useState } from "react";
import * as mockData from "./mock";

export const useBedroomsSegment = () => {
  const router = useRouter();
  const stayDispatch = useStayDispatch();
  const { guests, bedrooms, beds } = useStayState();
  const [data, _] = useState({
    guests,
    bedrooms,
    beds,
  });

  const handleRedirectToNextPage = () => {
    stayDispatch({
      type: "add",
      payload: {
        guests: data.guests,
        bedrooms: data.bedrooms,
        beds: data.beds,
      },
    });
    setTimeout(() => {
      router.push("/become-a-host/bathrooms");
    }, 500);
  };

  const handleRedirectToPreviousPage = () => {
    setTimeout(() => {
      router.push("/become-a-host/room");
    }, 500);
  };
  return {
    handleRedirectToPreviousPage,
    handleRedirectToNextPage,
    ...mockData,
  };
};
