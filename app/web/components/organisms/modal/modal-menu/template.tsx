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
  options: OptionsProps;
};

/**
 * Renders the menu modal
 */
export const MenuModalTemplate = ({
  authenticated = false,
  options,
}: MenuModalTemplateProps): JSX.Element => {
  return (
    <div
      style={{ width: 230, backgroundColor: "white" }}
      className="w-full py-2 rounded-lg"
    >
      <div className="w-full">
        {authenticated ? (
          <Options options={options} />
        ) : (
          <Options options={options} />
        )}
        <div style={{ height: 1 }} className="w-full bg-gray-400 my-2"></div>
        {authenticated ? (
          <Options options={options} />
        ) : (
          <Options options={options} />
        )}
        {authenticated && (
          <>
            <div className="w-full bg-gray-600 my-2"></div>
            <Options options={options} />
          </>
        )}
      </div>
    </div>
  );
};
