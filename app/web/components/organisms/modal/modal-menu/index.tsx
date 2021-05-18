import { useMenuModal } from './logic';
import { MenuModalTemplate, MenuModalTemplateProps } from './template';

export interface MenuModalProps extends MenuModalTemplateProps {}

export const MenuModal: React.FC<MenuModalProps> = (props) => {
  const data = useMenuModal();
  return <MenuModalTemplate {...props} {...data} />;
};
