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
        variant: "others" as const,
        othersType: "facebookLogo" as const,
        width: 19,
      },
      handleClick: handleFacebookLogin,
    },
    {
      name: "Google",
      icon: {
        variant: "others" as const,
        othersType: "googleLogo" as const,
        width: 17,
      },
      handleClick: handleFacebookLogin,
    },
    {
      name: "Apple",
      icon: {
        variant: "others" as const,
        othersType: "appleLogo" as const,
        width: 17,
      },
      handleClick: handleFacebookLogin,
    },
  ];

  const phoneSwitchButton = {
    name: "Phone",
    icon: {
      variant: "others" as const,
      othersType: "phone" as const,
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
