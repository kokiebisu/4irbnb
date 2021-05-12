import { MenuModalTemplate, MenuModalTemplateProps } from './template';

export interface MenuModalProps extends MenuModalTemplateProps {}

export const MenuModal: React.FC<MenuModalProps> = (props) => {
  return <MenuModalTemplate {...props} />;
};

export const Menu = (props) => {
  return {
    menu: {
      component: <MenuModal {...props} />,
    },
  };
};
