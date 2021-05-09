import { MenuButtonTemplate, MenuButtonTemplateProps } from './template';

export interface MenuButtonProps extends MenuButtonTemplateProps {}

const MenuButton: React.FC<MenuButtonProps> = (props) => {
  return <MenuButtonTemplate {...props} />;
};

export const menu = ({ ...props }) => {
  return {
    menu: {
      component: <MenuButton {...props} />,
    },
  };
};
