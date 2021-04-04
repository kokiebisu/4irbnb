import { motion } from 'framer-motion';
import { MagnifyGlass } from '@svg/original';

/**
 * Renders the searchbar button component
 * @param {boolean} mini - Whether if the button is the minified version or not
 */
const SearchbarButton: React.FC<{ mini?: boolean }> = ({ mini = false }) => {
  const handlePress = () => {
    alert('searchbar button clicked');
  };
  return (
    <>
      {mini ? (
        <div
          style={{ gridTemplateColumns: '1fr auto' }}
          className="relative py-1.5 pl-6 w-full pr-1.5 grid items-center justify-between border border-gray-300 rounded-full"
        >
          <div>
            <p className="whitespace-nowrap text-sm font-medium text-left">
              Start your search
            </p>
          </div>
          <div className="bg-primary rounded-full h-8 w-8 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <MagnifyGlass
                width={12}
                height={12}
                stroke="white"
                strokeWidth={6}
              />
            </div>
          </div>
        </div>
      ) : (
        <motion.button
          whileTap={{ scale: 0.98 }}
          data-testid="button"
          className="w-full rounded-lg bg-white border border-gray-300 hover:shadow-sm"
          onClick={handlePress}
        >
          <div className="py-5 pl-6 pr-5 absolute top-0 bottom-0 right-0 left-0">
            <div className="mr-4">
              <MagnifyGlass width={15} stroke="black" strokeWidth={4} />
            </div>
            <div className="font-thin text-sm text-gray-200">Search stays</div>
          </div>
        </motion.button>
      )}
    </>
  );
};

export const searchbar = (props) => {
  return {
    searchbar: {
      component: <SearchbarButton {...props} />,
      style: '',
    },
  };
};
