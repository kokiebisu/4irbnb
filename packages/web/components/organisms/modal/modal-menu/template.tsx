import { Button } from "@atoms";

export type OptionsProps = {
  name: string;
  handleClick: () => void;
  bold: boolean;
}[];

const Options = ({ options }: { options: OptionsProps }): JSX.Element => {
  return (
    <div>
      {options.map(({ name, handleClick, bold }, index) => (
        <div key={index}>
          <Button
            variant="option"
            name={name}
            bold={bold}
            onClick={handleClick}
          />
        </div>
      ))}
    </div>
  );
};

export type MenuModalTemplateProps = {
  authenticated?: boolean;
  topOptions: OptionsProps;
  bottomOptions: OptionsProps;
};

/**
 * Renders the menu modal
 */
export const MenuModalTemplate = ({
  authenticated = false,
  topOptions,
  bottomOptions,
}: MenuModalTemplateProps): JSX.Element => {
  return (
    <div
      style={{ width: 230, padding: "14px 0" }}
      className="w-full rounded-2xl bg-white shadow-lg"
    >
      <div className="w-full">
        {authenticated ? (
          <Options options={topOptions} />
        ) : (
          <Options options={topOptions} />
        )}
        <div style={{ height: 1 }} className="w-full bg-gray-200 my-2"></div>
        {authenticated ? (
          <Options options={bottomOptions} />
        ) : (
          <Options options={bottomOptions} />
        )}
      </div>
    </div>
  );
};
