import React from "react";
import { useMenuBar } from "./logic";
import { MenuBarTemplate, MenuBarTemplateProps } from "./template";

export type MenuBarProps = MenuBarTemplateProps;

export const MenuBar = (props: MenuBarProps): JSX.Element => {
  const data = useMenuBar();
  return (
    <div data-testid="bar-menu--organism">
      <MenuBarTemplate {...props} {...data} />
    </div>
  );
};
