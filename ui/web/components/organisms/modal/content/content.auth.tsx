import React from "react";
import { useAuthState } from "@context/auth";
import { Prototype } from "@prototype";

export const AuthContent = () => {
  const authState = useAuthState();
  switch (authState.display) {
    case "login":
      return <Prototype variant="login" />;
    case "signup":
      return <Prototype variant="signup" />;
    case "auth":
      return <Prototype variant="auth" />;
    case "forgot_password":
      return <Prototype variant="forgotpassword" />;
    case "exists":
      return <Prototype variant="exists" />;
    default:
      return;
  }
};
