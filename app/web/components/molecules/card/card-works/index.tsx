import { useWorksCard } from "./logic";
import { WorksCardTemplate, WorksCardTemplateProps } from "./template";

export type WorksCardProps = WorksCardTemplateProps;

const WorksCard = (props: WorksCardProps): JSX.Element => {
  const data = useWorksCard(props);
  return <WorksCardTemplate {...props} {...data} />;
};
