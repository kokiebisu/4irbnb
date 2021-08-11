import { Layout } from "@layout";

export const CurrencyInnerTemplate = () => {
  return (
    <div>
      <div className="mb-4">
        <Layout
          variant="currency"
          title="Choose a currency"
          items={[
            { name: "Canadian dollar", abbreviation: "CAD", symbol: "$" },
          ]}
        />
      </div>
    </div>
  );
};
