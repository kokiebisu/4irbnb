/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Layout } from "@nextbnb/design/layout";

export const CurrencyPrototype: React.FC<{}> = () => {
  return (
    <div>
      <div css={{ marginBottom: 24 }}>
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
