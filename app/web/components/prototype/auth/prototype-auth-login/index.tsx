import React from 'react';
import {
  LoginPrototypeTemplate,
  LoginPrototypeTemplateProps,
} from './template';

export interface LoginPrototypeProps extends LoginPrototypeTemplateProps {}

export const LoginPrototype: React.FC<LoginPrototypeProps> = (props) => {
  return <LoginPrototypeTemplate {...props} />;
};

export const login = (props) => {
  return {
    login: {
      component: <LoginPrototype {...props} />,
    },
  };
};
