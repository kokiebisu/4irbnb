import { Icon } from "@atoms";

export type SearchbarButtonTemplateProps = {
  onClick: () => void;
};

/**
 * Renders the searchbar button component
 */
export const SearchbarButtonTemplate = ({
  onClick,
}: SearchbarButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="searchbar-button"
      className="inline-block shadow-md hover:shadow-lg transition rounded-full border border-gray-300 border-solid"
      onClick={onClick}
    >
      <div
        style={{ gridTemplateColumns: "1fr auto", padding: "8px 8px 8px 22px" }}
        className="relative inline-grid items-center justify-between"
      >
        <div className="mr-9 pr-20">
          <p className="whitespace-nowrap text-sm font-medium text-left">
            Start your search
          </p>
        </div>
        <div className="bg-primary rounded-full h-8 w-8 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Icon
              variant="stroke"
              strokeType="magnifyGlass"
              width={12}
              height={12}
              stroke="white"
              strokeWidth={6}
            />
          </div>
        </div>
      </div>
    </button>
  );
};
