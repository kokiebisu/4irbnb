/**
 * Renders the Progress Bar
 * @param {number} percentage - percentage of the progress bar
 */
export const ProgressBar: React.FC<{
  percentage?: number;
}> = ({ percentage = 50 }) => {
  return (
    <div className="relative w-full h-2 bg-gray-200 z-10">
      <div className="w-full h-2 flex z-50">
        {Array.from(Array(24).keys()).map((_, index) => {
          return (
            <div
              key={index}
              className={`w-1/12 h-2 bg-transparent ${
                index === 23 ? '' : 'border border-gray-200'
              }`}
            />
          );
        })}
        <div className="absolute h-full rounded-r-full bg-green-700 z-50"></div>
      </div>
    </div>
  );
};
