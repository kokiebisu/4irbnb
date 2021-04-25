import React from 'react';
import { useMenuBar } from './logic';
import { MenuBarTemplate } from './template';

const MenuBar = (props) => {
  const data = useMenuBar();
  return <MenuBarTemplate {...props} {...data} />;
};

export const menu = (props) => {
  return {
    menu: {
      component: <MenuBar {...props} />,
    },
  };
};
