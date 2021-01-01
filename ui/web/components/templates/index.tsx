/** auth templates */
import { AuthTemplate } from "@template/auth/template.auth";
import { LoginTemplate } from "@template/auth/template.login";
import { SignupTemplate } from "@template/auth/template.signup";
import { ForgotPasswordTemplate } from "@template/auth/template.forgot";
import { ExistsTemplate } from "@template/auth/template.exists";

/** homes templates */
import { CategoryTemplate } from "@template/homes/template.category";
import { NearbyTemplate } from "@template/homes/template.nearby";

/** globe templates */
import { LanguageTemplate } from "@template/globe/template.language";
import { CurrencyTemplate } from "@template/globe/template.currency";
import { LocationTemplate } from "@template/modal/template.location";
import { CheckTemplate } from "@template/modal/template.check";
import { SearchbarTemplate } from "@template/template.searchbar";

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
  ...props
}) => {
  const variants: { [variant: string]: JSX.Element } = {
    nearby: <NearbyTemplate {...props} />,
    category: <CategoryTemplate {...props} />,
    login: <LoginTemplate {...props} />,
    signup: <SignupTemplate {...props} />,
    auth: <AuthTemplate {...props} />,
    forgotpassword: <ForgotPasswordTemplate {...props} />,
    exists: <ExistsTemplate {...props} />,
    language: <LanguageTemplate {...props} />,
    currency: <CurrencyTemplate {...props} />,
    location: <LocationTemplate {...props} />,
    check: <CheckTemplate {...props} />,
    searchbar: <SearchbarTemplate {...props} />,
  };
  return <div data-testid={`${variant}-template`}>{variants[variant]}</div>;
};
