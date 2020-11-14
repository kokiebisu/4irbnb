import React from 'react';
import { AuthTemplate } from './modal/template.auth';
import { LoginTemplate } from './modal/template.login';
import { SignupTemplate } from './modal/template.signup';
import { TemplateProps } from './props';
import { CategoryTemplate } from './template.category';
import { NearbyTemplate } from './template.nearby';

export const Template: React.FC<TemplateProps> = ({
  type = 'nearby',
  city = 'Paris',
  stayType = 'house',
  characteristics,
}) => {
  const types = {
    nearby: <NearbyTemplate city={city} />,
    category: <CategoryTemplate stayType={stayType} />,
    login: <LoginTemplate />,
    signup: <SignupTemplate />,
    auth: <AuthTemplate />,
  };
  return types[type];
};
