import { MenuButtonTemplate, MenuButtonTemplateProps } from "./template";

export type MenuButtonProps = MenuButtonTemplateProps;

export const MenuButton = (props: MenuButtonProps): JSX.Element => (
  <MenuButtonTemplate {...props} />
);
