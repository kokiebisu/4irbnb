import { Icon } from '@icons';

export interface SearchbarButtonProps {}

/**
 * Renders the searchbar button component
 */
export const SearchbarButton: React.FC<SearchbarButtonProps> = () => {
  return (
    <div
      style={{ gridTemplateColumns: '1fr auto' }}
      className="relative py-1.5 pl-6 pr-1.5 inline-grid items-center justify-between border border-gray-300 rounded-full"
    >
      <div className="mr-9">
        <p className="whitespace-nowrap text-sm font-medium text-left">
          Start your search
        </p>
      </div>
      <div className="bg-primary rounded-full h-8 w-8 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Icon
            variant="general"
            generalType="magnifyGlass"
            width={12}
            height={12}
            stroke="white"
            strokeWidth={6}
          />
        </div>
      </div>
    </div>
  );
};

export const searchbar = (props) => {
  return {
    searchbar: <SearchbarButton {...props} />,
  };
};
