import { useSharingCard } from "./logic";
import { SharingCardTemplate } from "./template";

export type SharingCardProps = {
  sharing: "meditate" | "baking" | "magic";
};

export const SharingCard = (props: SharingCardProps): JSX.Element => {
  const data = useSharingCard(props);
  return <SharingCardTemplate {...props} {...data} />;
};
