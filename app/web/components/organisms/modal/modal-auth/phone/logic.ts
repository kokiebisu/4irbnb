import { useAuthDispatch, useAuthState } from "@context/auth";
import { useFormik } from "formik";

export type AuthTypeVariants = "email" | "facebook" | "google" | "apple";

export const usePhonePrototype = () => {
  const authDispatch = useAuthDispatch();
  const authState = useAuthState();

  const formik = useFormik({
    initialValues: {
      region: "",
      tel: "",
    },
    // validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleFacebookLogin = () => alert("facebook login");
  const handleEmailLogin = () => authDispatch({ type: "email" });
  const handleGoogleLogin = () => alert("google login");
  const handleAppleLogin = () => alert("apple login");

  const handleRegionChange = (e: any) => formik.handleChange(e);

  const authMethods = [
    {
      name: "Facebook",
      icon: {
        variant: "logo" as const,
        logoType: "facebook" as const,
        width: 19,
      },
      handleClick: handleFacebookLogin,
    },
    {
      name: "Google",
      icon: {
        variant: "logo" as const,
        logoType: "google" as const,
        width: 17,
      },
      handleClick: handleFacebookLogin,
    },
    {
      name: "Apple",
      icon: {
        variant: "logo" as const,
        logoType: "apple" as const,
        width: 17,
      },
      handleClick: handleFacebookLogin,
    },
  ];

  const emailSwitchButton = {
    name: "Email",
    icon: {
      variant: "general" as const,
      generalType: "email" as const,
      width: 17,
    },
    handleClick: handleEmailLogin,
  };

  const handlePhoneNumberChange = (e: any) => formik.handleChange(e);
  const handleEmailChange = (e: any) => formik.handleChange(e);

  const handleSubmit = (e: any) => formik.handleSubmit(e);

  return {
    display: authState.display,
    region: formik.values.region,
    tel: formik.values.tel,
    regionError: !!formik.errors.region,
    telError: !!formik.errors.region,
    authMethods,
    handleSubmit,
    handleRegionChange,
    handlePhoneNumberChange,
    handleEmailChange,
    emailSwitchButton,
  };
};
