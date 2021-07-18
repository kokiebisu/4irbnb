import { TypeStayCardTemplate, TypeStayCardTemplateProps } from "./template";

export type TypeStayCardProps = TypeStayCardTemplateProps;

export const TypeStayCard = (props: TypeStayCardProps): JSX.Element => {
  return <TypeStayCardTemplate {...props} />;
};
