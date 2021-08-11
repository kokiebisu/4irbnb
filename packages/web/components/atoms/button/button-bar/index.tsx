import { BarButtonTemplate, BarButtonTemplateProps } from "./template";

export interface BarButtonProps extends BarButtonTemplateProps {}

export const BarButton: React.FC<BarButtonProps> = ({ ...props }) => (
  <BarButtonTemplate {...props} />
);
