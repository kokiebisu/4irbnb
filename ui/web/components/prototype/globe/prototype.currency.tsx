/** components */
import { Layout } from "@layout/layout.component";

/** styles */
import space from "@styles/space.module.scss";

export const CurrencyPrototype: React.FC<{}> = () => {
  return (
    <div>
      <div className={[space["m-b--24"]].join(" ")}>
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
