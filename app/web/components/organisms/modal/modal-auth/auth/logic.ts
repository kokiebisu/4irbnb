import { useAuthDispatch } from "@context/auth";

export type AuthTypeVariants = "email" | "facebook" | "google" | "apple";

export const useAuthPrototype = () => {
  const authDispatch = useAuthDispatch();
  const handleFacebookLogin = () => alert("facebook login");
  const handleEmailLogin = () => authDispatch({ type: "auth_email" });
  const handleGoogleLogin = () => alert("google login");
  const handleAppleLogin = () => alert("apple login");
  const handlePhoneLogin = () => authDispatch({ type: "auth_phone" });

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

  const email = {
    name: "Email",
    icon: {
      variant: "general" as const,
      generalType: "email" as const,
      width: 17,
    },
    handleClick: handleEmailLogin,
  };

  const phone = {
    name: "Phone",
    icon: {
      variant: "general" as const,
      generalType: "phone" as const,
      width: 17,
    },
    handleClick: handlePhoneLogin,
  };

  return { authMethods, email, phone };
};
