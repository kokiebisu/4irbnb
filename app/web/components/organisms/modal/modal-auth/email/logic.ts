import { useAuthDispatch, useAuthState } from "@context/auth";
import { authClient } from "../../../../../auth/okta";
import { useFormik } from "formik";

export type AuthTypeVariants = "email" | "facebook" | "google" | "apple";

export const useEmailPrototype = () => {
  const authDispatch = useAuthDispatch();
  const authState = useAuthState();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    // validate,
    onSubmit: async (values) => {
      const idToken = await authClient.token.getWithRedirect({
        responseType: "id_token",
      });
      console.log("ITTOKEN", idToken);
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleFacebookLogin = () => alert("facebook login");
  // const handleGoogleLogin = () => alert("google login");
  // const handleAppleLogin = () => alert("apple login");
  const handlePhoneLogin = () => authDispatch({ type: "phone" });

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

  const phoneSwitchButton = {
    name: "Phone",
    icon: {
      variant: "general" as const,
      generalType: "phone" as const,
      width: 17,
    },
    handleClick: handlePhoneLogin,
  };

  const handlePhoneNumberChange = (e: any) => formik.handleChange(e);
  const handleEmailChange = (e: any) => formik.handleChange(e);

  const handleSubmit = (e: any) => formik.handleSubmit(e);

  return {
    display: authState.display,
    email: formik.values.email,
    emailError: formik.errors.email,
    authMethods,
    handleSubmit,
    handleRegionChange,
    handlePhoneNumberChange,
    handleEmailChange,
    phoneSwitchButton,
  };
};
