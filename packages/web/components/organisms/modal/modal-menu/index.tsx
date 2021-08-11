import { useMenuModal } from "./logic";
import { MenuModalTemplate, MenuModalTemplateProps } from "./template";

export type MenuModalProps = MenuModalTemplateProps;

export const MenuModal = (props: MenuModalProps): JSX.Element => {
  const data = useMenuModal();
  return <MenuModalTemplate {...props} {...data} />;
};
