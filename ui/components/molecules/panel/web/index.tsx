/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { ExperiencePanel } from "./panel.experience";
import { RoomPanel } from "./panel.room";

export const $Panel = {
  EXPERIENCE: "experience",
  ROOM: "room",
};

export interface PanelProps {
  variant: string;
  extendsTo?: string;
  [property: string]: any;
}

export const Panel: React.FC<PanelProps> = ({
  variant,
  extendsTo,
  ...props
}) => {
  const variants: { [variant: string]: JSX.Element } = {
    experience: <ExperiencePanel {...props} />,
    room: <RoomPanel {...props} />,
  };
  return (
    <div data-testid={`${variant}-panel--molecule`}>{variants[variant]}</div>
  );
};
