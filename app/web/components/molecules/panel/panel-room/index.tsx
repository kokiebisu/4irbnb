import { RoomPanelTemplate, RoomPanelTemplateProps } from "./template";

export type RoomPanelProps = RoomPanelTemplateProps;

export const RoomPanel = (props: RoomPanelProps): JSX.Element => {
  return <RoomPanelTemplate {...props} />;
};
