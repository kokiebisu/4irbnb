import { Button } from "@atoms";

export type CurrencyLayoutProps = {
  items?: { name?: string; abbreviation?: string; symbol?: string }[];
  title?: string;
};

/**
 * Layout for Currency modal
 * @param {Object[]} items - Currency type
 * @param {string} title - Title of the Template
 */
export const CurrencyLayout = ({
  items = [],
  title = "Title here",
}: CurrencyLayoutProps): JSX.Element => {
  return (
    <div>
      <div className="mb-4">
        <h3 className="text-md">{title}</h3>
      </div>
      <div className="w-full grid grid-cols-5 gap-4 p-3">
        {items?.map(({ name, abbreviation, symbol }, index) => {
          return (
            <div key={index}>
              <Button
                stretch
                variant="currency"
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
