import React from "react";
// import { useAuthDispatch, useAuthState } from "@context/auth";
import { Email } from "@svg/original";
import { Apple, Facebook, Google } from "@svg/logo";

export const getAuthContents = () => {
  const authState = useAuthState();
  const authDispatch = useAuthDispatch();

  const auths = {
    email: {
      name: "Email",
      icon: <Email width={17} />,
      handleClick() {
        if (authState.title === "Log in") {
          return authDispatch({ type: "login" });
        }
        return authDispatch({ type: "signup" });
      },
    },
    facebook: {
      name: "Facebook",
      icon: <Facebook width={19} />,
      handleClick() {
        alert("clicked facebook");
      },
    },
    google: {
      name: "Google",
      icon: <Google width={17} />,
      handleClick() {
        alert("clicked google");
      },
    },
    apple: {
      name: "Apple",
      icon: <Apple width={17} />,
      handleClick() {
        alert("clicked apple");
      },
    },
  };

  return auths;
};
