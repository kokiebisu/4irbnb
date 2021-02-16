/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { ExperiencePanel } from "./web/panel.experience";
import { RoomPanel } from "./web/panel.room";

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
    [$Panel.EXPERIENCE]: <ExperiencePanel {...props} />,
    [$Panel.ROOM]: <RoomPanel {...props} />,
  };
  return <div data-testid={`${variant}-panel`}>{variants[variant]}</div>;
};
