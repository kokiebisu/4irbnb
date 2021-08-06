import { useWorksCard } from "./logic";
import { WorksCardTemplate } from "./template";

export type WorksCardProps = {
  work: "design" | "share" | "submit" | "setup";
};

export const WorksCard = (props: WorksCardProps): JSX.Element => {
  const data = useWorksCard(props);
  return <WorksCardTemplate {...props} {...data} />;
};
