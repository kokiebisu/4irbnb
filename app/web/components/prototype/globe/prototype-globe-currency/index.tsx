import {
  CurrencyPrototypeTemplate,
  CurrencyPrototypeTemplateProps,
} from './template';

export interface CurrencyPrototypeProps
  extends CurrencyPrototypeTemplateProps {}

export const CurrencyPrototype: React.FC<CurrencyPrototypeProps> = (props) => {
  return <CurrencyPrototypeTemplate {...props} />;
};

export const currency = (props) => {
  return {
    currency: {
      component: <CurrencyPrototype {...props} />,
    },
  };
};
