import { FillIconProps } from "./fill";
import { OthersIconProps } from "./others";
import { StrokeIconProps } from "./stroke";
import { factory } from "./utils/factory";

export type IconProps =
  | ({ variant: "fill" } & FillIconProps)
  | ({ variant: "stroke" } & StrokeIconProps)
  | ({ variant: "others" } & OthersIconProps);

export const Icon = ({
  width,
  height,
  ...props
}: IconProps & { width: number; height: number }): JSX.Element => (
  <div style={{ width, height }}>{factory(props)}</div>
);

export * from "./fill";
export * from "./stroke";
