import { useStayDispatch } from "@context/stay";
import { useTabTitle } from "@hooks/useTabTitle";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as mockData from "./mock";

export const useGetStartedSegment = () => {
  const router = useRouter();
  useTabTitle(
    "Become a Host and Rent Out Your Room, House or Apartment on Airbnb"
  );
  const [loading, setLoading] = useState(false);
  const [stay, setStay] = useState("Entire place");
  const dispatchStay = useStayDispatch();

  const formik = useFormik({
    initialValues: {
      guests: 1,
      address: "",
    },
    onSubmit: async ({ guests, address }) => {
      setLoading(true);
      dispatchStay({
        type: "add",
        payload: { stay, guests, address },
      });
      setTimeout(() => {
        router.push("/become-a-host/room");
      }, 2000);
    },
  });

  useEffect(() => {
    dispatchStay({
      type: "reset",
      payload: { place: "Entire place", guests: 0, address: "" },
    });
  }, []);

  const handleSubmit = () => formik.handleSubmit();

  const handleChange = (e: any) => formik.handleChange(e);

  const handlePlaceChange = (value: string) => setStay(value);

  const handleContinueSelect = () => alert("sadf");

  return {
    ...mockData,
    loading,
    guests: formik.values.guests,
    address: formik.values.address,
    stay,
    handleChange,
    handleSubmit,
    handlePlaceChange,
    handleContinueSelect,
  };
};
