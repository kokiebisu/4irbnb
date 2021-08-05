import { IconProps } from "..";
import { FillIcon } from "../fill";
import { OthersIcon } from "../others";
import { StrokeIcon } from "../stroke";

export const factory = (props: IconProps): JSX.Element => {
  switch (props.variant) {
    case "fill":
      return <FillIcon {...props} />;
    case "stroke":
      return <StrokeIcon {...props} />;
    case "others":
      return <OthersIcon {...props} />;
    default:
      throw new Error("[ICON] Invalid variant");
  }
};
