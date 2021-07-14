import { GuestsInputTemplate, GuestsInputTemplateProps } from "./template";

export type GuestsInputProps = GuestsInputTemplateProps;

export const GuestsInput = (props: GuestsInputProps): JSX.Element => {
  return <GuestsInputTemplate {...props} />;
};
