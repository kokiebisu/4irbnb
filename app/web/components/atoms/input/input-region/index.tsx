import { RegionInputTemplate, RegionInputTemplateProps } from './template';

export interface RegionInputProps extends RegionInputTemplateProps {}

export const RegionInput: React.FC<RegionInputProps> = (props) => {
  return <RegionInputTemplate {...props} />;
};
