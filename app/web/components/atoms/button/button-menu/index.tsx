import { MenuButtonTemplate, MenuButtonTemplateProps } from './template';

export type MenuButtonProps = MenuButtonTemplateProps;

export const MenuButton: React.FC<MenuButtonProps> = (props) => {
  return <MenuButtonTemplate {...props} />;
};
