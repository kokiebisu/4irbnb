import React from "react";

/** templates */
import { AuthTemplate } from "./auth/template.auth";
import { LoginTemplate } from "./auth/template.login";
import { SignupTemplate } from "./auth/template.signup";
import { TemplateProps } from "./props";
import { CategoryTemplate } from "./homes/template.category";
import { NearbyTemplate } from "./homes/template.nearby";
import { ForgotPasswordTemplate } from "./auth/template.forgot";
import { ExistsTemplate } from "./auth/template.exists";
import { LanguageTemplate } from "./globe/template.language";
import { CurrencyTemplate } from "./globe/template.currency";

export const Template: React.FC<TemplateProps> = ({
  type = "nearby",
  city = "Paris",
  stayType = "house",
  characteristics,
}) => {
  const types = {
    nearby: <NearbyTemplate city={city} />,
    category: <CategoryTemplate stayType={stayType} />,
    login: <LoginTemplate />,
    signup: <SignupTemplate />,
    auth: <AuthTemplate />,
    forgotpassword: <ForgotPasswordTemplate />,
    exists: <ExistsTemplate />,
    language: <LanguageTemplate />,
    currency: <CurrencyTemplate />,
  };
  return types[type];
};
