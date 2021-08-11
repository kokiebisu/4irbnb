import { ExperiencePanelProps } from "./panel-experience";
import { RoomPanelProps } from "./panel-room";
import { factory } from "./utils/factory";

export type PanelProps =
  | ({ variant: "experience" } & ExperiencePanelProps)
  | ({ variant: "room" } & RoomPanelProps);

export const Panel = ({ ...props }: PanelProps): JSX.Element => factory(props);
