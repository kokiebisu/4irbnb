import { useStayDispatch, useStayState } from "@context/stay";
import { useRouter } from "next/router";
import { useState } from "react";
import * as mockData from "./mock";

export const useCheckInSegment = () => {
  const router = useRouter();
  const stayDispatch = useStayDispatch();
  const { notice, checkinFrom, checkinTo } = useStayState();
  const [data, _] = useState({
    notice,
    checkinFrom,
    checkinTo,
  });

  const handleRedirectToNextPage = () => {
    stayDispatch({
      type: "add",
      payload: data,
    });
    setTimeout(() => {
      router.push("/become-a-host/advance");
    }, 500);
  };

  const handleRedirectToPreviousPage = () => {
    setTimeout(() => {
      router.push("/become-a-host/review-how-guests-book");
    }, 500);
  };

  return {
    ...mockData,
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
  };
};
