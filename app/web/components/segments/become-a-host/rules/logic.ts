import { useStayDispatch, useStayState } from "@context/stay";
import { useRouter } from "next/router";
import { useState } from "react";
import * as mockData from "./mock";

export const useRulesSegment = () => {
  const router = useRouter();
  const stayDispatch = useStayDispatch();
  const { smoking, events, details } = useStayState();
  const [data, setData] = useState({
    smoking,
    events,
    details,
  });

  const handleRedirectToNextPage = () => {
    stayDispatch({
      type: "add",
      payload: data,
    });
    setTimeout(() => {
      router.push("/become-a-host/review-how-guests-book");
    }, 500);
  };

  const handleRedirectToPreviousPage = () => {
    setTimeout(() => {
      router.push("/become-a-host/spaces");
    }, 500);
  };

  const canProceedToNextPage =
    typeof data.events === "undefined" && typeof data.smoking === "undefined";

  // type: string, params: string
  const handleChange = () => {
    // if (data[type].includes(params)) {
    //   setData({
    //     ...data,
    //     [type]: [...data[type]].filter((element) => element !== params),
    //   });
    // } else {
    //   setData({
    //     ...data,
    //     [type]: [...data[type], params],
    //   });
    // }
  };

  const handleSwitch = (flag: boolean, property: string) => {
    setData({ ...data, [property]: flag });
  };

  return {
    ...mockData,
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
    canProceedToNextPage,
    handleChange,
    handleSwitch,
    isSmokingAllowed: data.smoking,
    isEventAllowed: data.events,
  };
};
