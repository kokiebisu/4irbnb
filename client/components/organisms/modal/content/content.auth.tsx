import React from "react";
import { useAuthState } from "../../../../context/auth";
import { Template } from "../../../../components/templates/template.component";

export const AuthContent = () => {
  const authState = useAuthState();
  switch (authState.display) {
    case "login":
      return <Template variant="login" />;
    case "signup":
      return <Template variant="signup" />;
    case "auth":
      return <Template variant="auth" />;
    case "forgot_password":
      return <Template variant="forgotpassword" />;
    case "exists":
      return <Template variant="exists" />;
    default:
      return;
  }
};
