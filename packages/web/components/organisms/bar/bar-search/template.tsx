import { Button } from "@atoms";
import { useToggleDispatch } from "@context/toggle";

export interface SearchBarTemplateProps {
  type: string;
  selected: string;
  transparent?: boolean;
  dispatchToggle?: any;
  handleGuestsSelected: () => void;
  handleCheckInSelected: () => void;
  handleSearch: () => void;
  handleSelectedChange: (param: string) => void;
}

/**
 * Renders the Searchbar
 */
export const SearchBarTemplate = ({
  type,
  selected,
  handleSelectedChange,
  transparent,
  handleGuestsSelected,
  handleCheckInSelected,
  handleSearch,
}: SearchBarTemplateProps): JSX.Element => {
  const types: {
    [key: string]: JSX.Element;
  } = {
    stay: (
      <div
        className={`${
          transparent ? "shadow-sm" : null
        } border border-gray-200 grid rounded-full bg-white`}
        style={{
          gridTemplateColumns: `1.5fr 1px 1fr 1px  1fr 1px ${
            !selected ? "1.5fr" : "2fr"
          }`,
        }}
      >
        <Option
          title="Where are you going?"
          subtitle="Location"
          selected={selected}
          setSelected={() => handleSelectedChange("location")}
          name="location"
        />
        <Seperator />
        <Option
          title="Add dates"
          subtitle="Check in"
          selected={selected}
          setSelected={() => handleSelectedChange("checkin")}
          name="checkin"
        />
        <Seperator />
        <Option
          title="Add dates"
          subtitle="Check out"
          selected={selected}
          setSelected={() => handleSelectedChange("checkout")}
          name="checkout"
        />
        <Seperator />
        <button
          className={`${
            selected === "guests" && "shadow-lg"
          } block py-2 pr-2 pl-5 rounded-full`}
          onClick={handleGuestsSelected}
        >
          <div
            className={`flex justify-between items-center ${
              selected === "guests" && "rounded-full"
            }`}
          >
            <div className="flex items-center">
              <div>
                <div>
                  <h3 className="text-left whitespace-nowrap text-xs">
                    Guests
                  </h3>
                </div>
                <div>
                  <p className="text-left whitespace-nowrap text-xs">
                    Add guests
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full flex items-center">
              <Button
                variant="search"
                onClick={() => alert("hello")}
                expanded={selected === "guests"}
              />
            </div>
          </div>
        </button>
      </div>
    ),
    experiences: (
      <div
        className={`${
          transparent ? "shadow-sm" : null
        } border-gray-300 grid rounded-full bg-white`}
        style={{
          gridTemplateColumns: `1fr 1px ${selected ? "1.25fr" : "1fr"}`,
        }}
      >
        <Option
          title="Where are you going?"
          subtitle="Location"
          selected={selected}
          setSelected={handleSelectedChange}
          name="location"
        />
        <Seperator />

        <button
          className={`block py-2 pr-3 pl-4 rounded-full hover:bg-gray-200 ${
            selected === "checkin" && "shadow-lg"
          }`}
          onClick={handleCheckInSelected}
        >
          <div
            className={`flex justify-between items-center ${
              selected === "checkin" && "rounded-full"
            }`}
          >
            <div className="flex items-center">
              <div>
                <div>
                  <h3 className="text-left whitespace-nowrap text-xs">Date</h3>
                </div>
                <div>
                  <p className="text-left whitespace-nowrap text-xs">
                    Add when you want to go
                  </p>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center">
              <Button
                variant="search"
                onClick={handleSearch}
                expanded={selected === "location"}
              />
            </div>
          </div>
        </button>
      </div>
    ),
  };

  return types[type];
};

const Seperator: React.FC<{}> = () => {
  return (
    <div className="h-full flex items-center">
      <div className="bg-gray-200 w-full h-4" />
    </div>
  );
};

const Option: React.FC<{
  name: string;
  subtitle: string;
  title: string;
  selected: string;
  setSelected: (param: string) => void;
}> = ({ name, subtitle, title, selected, setSelected }) => {
  const dispatchToggle = useToggleDispatch();
  return (
    <button
      className={`${
        selected === name ? "shadow-lg" : ""
      } hover:bg-gray-200 block pl-6 pr-4 rounded-full`}
      onClick={() => {
        setSelected(name);
        dispatchToggle({ type: `toggle_${name}` });
      }}
    >
      <div className="flex items-center">
        <div>
          <div>
            <h3 className="text-left text-xs">{title}</h3>
          </div>
          <div>
            <p className="text-left text-xs">{subtitle}</p>
          </div>
        </div>
      </div>
    </button>
  );
};
