import { Icon, $Icon } from '@icons';

export interface SearchButtonProps {
  expand?: boolean;
}

/**
 * Renders the Search Button component
 * @param {expand}
 */
export const SearchButton: React.FC<SearchButtonProps> = ({ expand }) => {
  return (
    <div
      className={`inline-flex items-center bg-primary rounded-full ${
        expand ? 'px-5 py-3' : null
      } transition`}
    >
      <div className={`${expand ? 'mr-1' : 'p-4'}`}>
        <Icon
          variant={$Icon.GENERAL}
          generalType="magnifyGlass"
          width={13}
          height={13}
          stroke="white"
          strokeWidth={4}
        />
      </div>
      <div
        className={`transition ${
          expand ? `visible opacity-1` : `invisible opacity-0 w-0`
        }`}
      >
        <p className="text-sm text-white">Search</p>
      </div>
    </div>
  );
};

export const search = (props) => {
  return {
    search: <SearchButton {...props} />,
  };
};
