import { RegionInputTemplate, RegionInputTemplateProps } from "./template";

export type RegionInputProps = RegionInputTemplateProps;

export const RegionInput = (props: RegionInputProps): JSX.Element => (
  <RegionInputTemplate {...props} />
);
