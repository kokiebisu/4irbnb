import {
  CurrencyButtonTemplate,
  CurrencyButtonTemplateProps,
} from './template';

export interface CurrencyButtonProps extends CurrencyButtonTemplateProps {}

export const CurrencyButton: React.FC<CurrencyButtonProps> = ({ ...props }) => {
  return <CurrencyButtonTemplate {...props} />;
};
