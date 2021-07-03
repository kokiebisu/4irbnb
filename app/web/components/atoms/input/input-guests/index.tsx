import { GuestsInputTemplate, GuestsInputTemplateProps } from './template';

export interface GuestsInputProps extends GuestsInputTemplateProps {}

export const GuestsInput: React.FC<GuestsInputProps> = (props) => {
  return <GuestsInputTemplate {...props} />;
};
