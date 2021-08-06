import { CategoryPrototypeProps } from "./prototype-homes-category";
import { NearbyPrototypeProps } from "./prototype-homes-nearby";
import { factory } from "./util/factory";

export type PrototypeProps =
  | ({ variant: "category" } & CategoryPrototypeProps)
  | ({ variant: "nearby" } & NearbyPrototypeProps);

export const Prototype = ({ ...props }: PrototypeProps): JSX.Element =>
  factory(props);
