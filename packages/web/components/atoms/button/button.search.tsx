import { MagnifyGlass } from '@svg/original';

/**
 * Renders the Search Button component
 * @param {expand}
 */
export const SearchButton: React.FC<{ expand?: boolean }> = ({
  expand = false,
}) => {
  return (
    <div
      className={`flex items-center bg-primary h-32 rounded-lg ${
        expand ? 32 : 4
      } transition`}
    >
      <div className="pl-5 mr-1">
        <MagnifyGlass width={13} height={13} stroke="white" strokeWidth={4} />
      </div>
      <div
        className={`transition ${
          expand ? `visible opacity-1` : `invisible opacity-0`
        }`}
      >
        <p className="text-sm text-white">Search</p>
      </div>
    </div>
  );
};
