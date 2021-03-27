import { Button, $Button } from "@button";

import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";

/**
 * Layout for Currency modal
 * @param {Object[]} items - Currency type
 * @param {string} title - Title of the Template
 */
export const CurrencyLayout: React.FC<{
  items?: { name?: string; abbreviation?: string; symbol?: string }[];
  title?: string;
}> = ({ items = [], title = "Title here" }) => {
  return (
    <div>
      <div className={[space["m-b--18"]].join(" ")}>
        <h3 className={[font["size--20"]].join(" ")}>{title}</h3>
      </div>
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          columnGap: 15,
          rowGap: 15,
          padding: 10,
        }}
      >
        {items?.map(({ name, abbreviation, symbol }, index) => {
          return (
            <div key={index}>
              <Button
                extendsTo={[font["text--left"]].join(" ")}
                variant={$Button.CURRENCY}
                name={name}
                abbreviation={abbreviation}
                symbol={symbol}
                block
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
