import React from 'react';
import { useMenuBar } from './logic';
import { MenuBarTemplate } from './template';

const MenuBar = (props) => {
  const data = useMenuBar();
  return (
    <div data-testid="bar-menu--organism">
      <MenuBarTemplate {...props} {...data} />
    </div>
  );
};

export const menu = (props) => {
  return {
    menu: {
      component: <MenuBar {...props} />,
    },
  };
};
