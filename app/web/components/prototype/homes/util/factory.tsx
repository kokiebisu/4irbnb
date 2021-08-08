import React from "react";
import { PrototypeProps } from "..";
import { CategoryPrototype } from "../prototype-homes-category";
import { NearbyPrototype } from "../prototype-homes-nearby";

export const factory = (props: PrototypeProps) => {
  switch (props.variant) {
    case "category":
      return <CategoryPrototype {...props} />;
    case "nearby":
      return <NearbyPrototype {...props} />;
    default:
      throw new Error(`[Homes prototype]: Invalid variant`);
  }
};
