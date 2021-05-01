import { CurrencyButtonTemplate } from './template';

const CurrencyButton = ({ ...props }) => {
  return <CurrencyButtonTemplate {...props} />;
};

export const currency = (props) => {
  return {
    currency: {
      component: <CurrencyButton {...props} />,
    },
  };
};
