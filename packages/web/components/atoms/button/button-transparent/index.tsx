import React from "react";
import {
  TransparentButtonTemplate,
  TransparentButtonTemplateProps,
} from "./template";

export type TransparentButtonProps = TransparentButtonTemplateProps;

export const TransparentButton = (
  props: TransparentButtonProps
): JSX.Element => <TransparentButtonTemplate {...props} />;
