import { PanelProps } from "@panel";
import { ExperiencePanel } from "@panel/panel-experience";
import { RoomPanel } from "@panel/panel-room";

export const factory = (props: PanelProps) => {
  switch (props.variant) {
    case "experience":
      return <ExperiencePanel {...props} />;
    case "room":
      return <RoomPanel {...props} />;
    default:
      throw new Error("[Panel Error] Invalid Panel variant");
  }
};
