import { useSharingCard } from "./logic";
import { SharingCardTemplate, SharingCardTemplateProps } from "./template";

export type SharingCardProps = SharingCardTemplateProps;

export const SharingCard = (props: SharingCardProps): JSX.Element => {
  const data = useSharingCard(props);
  return <SharingCardTemplate {...props} {...data} />;
};
