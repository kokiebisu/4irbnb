import React from "react";
import { PhotoInputTemplate, PhotoInputTemplateProps } from "./template";

export type PhotoInputProps = PhotoInputTemplateProps;

export const PhotoInput = (props: PhotoInputProps): JSX.Element => {
  return <PhotoInputTemplate {...props} />;
};
