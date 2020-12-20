import React from "react";

/** auth templates */
import { AuthTemplate } from "./auth/template.auth";
import { LoginTemplate } from "./auth/template.login";
import { SignupTemplate } from "./auth/template.signup";
import { ForgotPasswordTemplate } from "./auth/template.forgot";
import { ExistsTemplate } from "./auth/template.exists";

/** homes templates */
import { CategoryTemplate } from "./homes/template.category";
import { NearbyTemplate } from "./homes/template.nearby";

/** globe templates */
import { LanguageTemplate } from "./globe/template.language";
import { CurrencyTemplate } from "./globe/template.currency";

export interface TemplateProps {
  variant?: string;
  place?: string;
  stayType?: string | string[];
  characteristics?: string;
  [property: string]: any;
}

export const Template: React.FC<TemplateProps> = ({
  variant = "nearby",
  city = "Paris",
  stayType = "house",
  characteristics,
}) => {
  const variants: { [variant: string]: JSX.Element } = {
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
  return <div data-testid={`${variant}-template`}>{variants[variant]}</div>;
};
