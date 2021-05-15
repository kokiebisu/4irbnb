import { Layout } from '@layout';

export interface CurrencyPrototypeTemplateProps {}

export const CurrencyPrototypeTemplate: React.FC<CurrencyPrototypeTemplateProps> = () => {
  return (
    <div>
      <div className="mb-4">
        <Layout
          variant="currency"
          title="Choose a currency"
          items={[
            { name: 'Canadian dollar', abbreviation: 'CAD', symbol: '$' },
          ]}
        />
      </div>
    </div>
  );
};
