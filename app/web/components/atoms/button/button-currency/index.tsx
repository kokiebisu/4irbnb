import {
  CurrencyButtonTemplate,
  CurrencyButtonTemplateProps,
} from './template';

export interface CurrencyButtonProps extends CurrencyButtonTemplateProps {}

const CurrencyButton: React.FC<CurrencyButtonProps> = ({ ...props }) => {
  return <CurrencyButtonTemplate {...props} />;
};

export const currency = (props) => {
  return {
    currency: {
      component: <CurrencyButton {...props} />,
    },
  };
};
