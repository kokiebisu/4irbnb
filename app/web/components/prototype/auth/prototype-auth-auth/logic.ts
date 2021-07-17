export type AuthTypeVariants = "email" | "facebook" | "google" | "apple";

export const useAuthPrototype = () => {
  const handleFacebookLogin = () => alert("facebook login");
  const handleEmailLogin = () => alert("email login");
  const handleGoogleLogin = () => alert("google login");
  const handleAppleLogin = () => alert("apple login");

  const authMethods = [
    {
      name: "Email",
      icon: {
        variant: "general" as const,
        generalType: "email" as const,
        width: 17,
      },
      handleClick: handleFacebookLogin,
    },
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

  return { authMethods };
};
