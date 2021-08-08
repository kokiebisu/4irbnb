import { useRouter } from "next/router";
import { useState } from "react";

export const useBannerSegment = () => {
  const router = useRouter();

  const [category, setCategory] = useState("stay");

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const handleHomeRedirect = () => router.push("/");

  return {
    category,
    handleCategoryChange,
    handleHomeRedirect,
  };
};
