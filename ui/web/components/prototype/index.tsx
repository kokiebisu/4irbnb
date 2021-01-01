/** auth templates */
import { AuthPrototype } from "@prototype/auth/prototype.auth";
import { LoginTemplate } from "@prototype/auth/prototype.login";
import { SignupTemplate } from "@prototype/auth/prototype.signup";
import { ForgotPasswordPrototype } from "@prototype/auth/prototype.forgot";
import { ExistsPrototype } from "@prototype/auth/prototype.exists";

/** homes templates */
import { CategoryPrototype } from "@prototype/homes/prototype.category";
import { NearbyPrototype } from "@prototype/homes/prototype.nearby";

/** globe templates */
import { LanguagePrototype } from "@prototype/globe/prototype.language";
import { CurrencyPrototype } from "@prototype/globe/prototype.currency";

import { SearchbarPrototype } from "@prototype/prototype.searchbar";

export interface PrototypeProps {
  variant?: string;
  place?: string;
  stayType?: string | string[];
  characteristics?: string;
  [property: string]: any;
}

export const Prototype: React.FC<PrototypeProps> = ({
  variant = "nearby",
  city = "Paris",
  stayType = "house",
  characteristics,
  ...props
}) => {
  const variants: { [variant: string]: JSX.Element } = {
    nearby: <NearbyPrototype {...props} />,
    category: <CategoryPrototype {...props} />,
    login: <LoginTemplate {...props} />,
    signup: <SignupTemplate {...props} />,
    auth: <AuthPrototype {...props} />,
    forgotpassword: <ForgotPasswordPrototype {...props} />,
    exists: <ExistsPrototype {...props} />,
    language: <LanguagePrototype {...props} />,
    currency: <CurrencyPrototype {...props} />,
    searchbar: <SearchbarPrototype {...props} />,
  };
  return <div data-testid={`${variant}-template`}>{variants[variant]}</div>;
};
