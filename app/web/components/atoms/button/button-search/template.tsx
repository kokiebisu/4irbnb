import { Icon } from "@atoms";

export type SearchButtonTemplateProps = {
  expanded?: boolean;
  onClick: () => void;
};

/**
 * Renders the Search Button component
 * @param {expand}
 */
export const SearchButtonTemplate = ({
  expanded,
  onClick,
}: SearchButtonTemplateProps): JSX.Element => {
  return (
    <button
      data-testid="search-button"
      className="inline-flex items-center"
      onClick={onClick}
    >
      <div
        className={`inline-flex items-center bg-primary rounded-full ${
          expanded ? "px-5 py-3" : ""
        } transition`}
      >
        <div className={`${expanded ? "mr-1" : "p-4"}`}>
          <Icon
            variant="general"
            generalType="magnifyGlass"
            width={13}
            height={13}
            stroke="white"
            strokeWidth={4}
          />
        </div>
        <div
          className={`transition ${
            expanded ? `visible opacity-1` : `invisible opacity-0 w-0`
          }`}
        >
          <p className="text-sm text-white">Search</p>
        </div>
      </div>
    </button>
  );
};
