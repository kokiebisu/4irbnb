import {
  CurrencyButtonTemplate,
  CurrencyButtonTemplateProps,
} from "./template";

export type CurrencyButtonProps = CurrencyButtonTemplateProps;

export const CurrencyButton = ({
  ...props
}: CurrencyButtonProps): JSX.Element => {
  return <CurrencyButtonTemplate {...props} />;
};
