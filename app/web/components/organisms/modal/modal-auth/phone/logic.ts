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
      email: "",
    },
    // validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleFacebookLogin = () => alert("facebook login");
  const handleEmailLogin = () => authDispatch({ type: "auth_email" });
  const handleGoogleLogin = () => alert("google login");
  const handleAppleLogin = () => alert("apple login");
  const handlePhoneLogin = () => authDispatch({ type: "auth_phone" });

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
    region: formik.values.region,
    tel: formik.values.tel,
    emailError: formik.errors.email,
    regionError: !!formik.errors.region,
    telError: !!formik.errors.region,
    authMethods,
    handleSubmit,
    handleRegionChange,
    handlePhoneNumberChange,
    handleEmailChange,
    emailSwitchButton,
    phoneSwitchButton,
  };
};
