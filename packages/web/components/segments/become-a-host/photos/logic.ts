import { useStayDispatch, useStayState } from "@context/stay";
import { useRouter } from "next/router";
import { useState } from "react";

export const usePhotosSegment = () => {
  const router = useRouter();
  // const [preview, setPreview] = useState([]);
  const stayDispatch = useStayDispatch();
  const { photos } = useStayState();
  const [data, _] = useState({
    photos,
  });

  const handlePhotosChange = () => {
    // setData({
    //   ...data,
    //   photos: [...data.photos, e.target.files[0]],
    // });
    // if (preview) {
    //   setPreview([...preview, URL.createObjectURL(e.target.files[0])]);
    // }
  };

  const handleRedirectToNextPage = () => {
    stayDispatch({
      type: "add",
      payload: data,
    });
    setTimeout(() => {
      router.push("/become-a-host/description");
    }, 500);
  };

  const handleRedirectToPreviousPage = () => {
    setTimeout(() => {
      router.push("/become-a-host/spaces");
    }, 500);
  };

  return {
    handlePhotosChange,
    handleRedirectToNextPage,
    handleRedirectToPreviousPage,
  };
};
