import { useStayDispatch, useStayState } from "@context/stay";
import { useRouter } from "next/router";
import { useState } from "react";
import * as mockData from "./mock";

export const useAdvanceSegment = () => {
  const router = useRouter();
  const stayDispatch = useStayDispatch();
  const { advance } = useStayState();
  const [data, _] = useState({
    advance,
  });

  const handleRedirectToNextPage = () => {
    stayDispatch({
      type: "add",
      payload: data,
    });
    setTimeout(() => {
      router.push("/become-a-host/period");
    }, 500);
  };

  const handleRedirectToPreviousPage = () => {
    setTimeout(() => {
      router.push("/become-a-host/checkin");
    }, 500);
  };
  return {
    ...mockData,
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
  };
};
