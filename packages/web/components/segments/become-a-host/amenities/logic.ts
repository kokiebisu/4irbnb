import { useStayDispatch, useStayState } from "@context/stay";
import { useRouter } from "next/router";
import { useState } from "react";
import * as mockData from "./mock";

export const useAmenitiesSegment = () => {
  const router = useRouter();
  const stayDispatch = useStayDispatch();
  const { amenities, safeties } = useStayState();
  const [data, setData] = useState({
    amenities,
    safeties,
  });

  const handleRedirectToNextPage = () => {
    stayDispatch({
      type: "add",
      payload: data,
    });
    setTimeout(() => {
      router.push("/become-a-host/spaces");
    }, 500);
  };

  const handleRedirectToPreviousPage = () => {
    setTimeout(() => {
      router.push("/become-a-host/location");
    }, 500);
  };

  const modify = (type: "amenities" | "safeties", params: string) => {
    if (data[type]!.includes(params)) {
      setData({
        ...data,
        [type]: [...data[type]!].filter((element) => element !== params),
      });
    } else {
      setData({
        ...data,
        [type]: [...data[type]!, params],
      });
    }
  };
  return {
    ...mockData,
    modify,
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
  };
};
