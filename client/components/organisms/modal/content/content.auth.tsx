import React from "react";
import { useAuthState } from "../../../../context/auth";
import { Template } from "../../../../components/templates/template.component";

export const AuthContent = () => {
  const authState = useAuthState();
  switch (authState.display) {
    case "login":
      return <Template type="login" />;
    case "signup":
      return <Template type="signup" />;
    case "auth":
      return <Template type="auth" />;
    case "forgot_password":
      return <Template type="forgotpassword" />;
    case "exists":
      return <Template type="exists" />;
    default:
      return;
  }
};
