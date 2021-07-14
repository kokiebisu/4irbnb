import { TypeStayCardTemplate, TypeStayCardTemplateProps } from "./template";

export type TypeStayCardProps = TypeStayCardTemplateProps;

const TypeStayCard = (props: TypeStayCardProps): JSX.Element => {
  return <TypeStayCardTemplate {...props} />;
};
