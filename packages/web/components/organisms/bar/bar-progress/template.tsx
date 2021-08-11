export interface ProgressBarTemplateProps {
  percentage: number;
}

/**
 * Renders the Progress Bar
 * @param {number} percentage - percentage of the progress bar
 */
export const ProgressBarTemplate = (): JSX.Element => {
  return (
    <div className="relative w-full h-2 bg-gray-200 z-10">
      <div className="w-full h-2 flex z-50">
        {new Array(24).fill(undefined).map((_, index) => {
          return (
            <div
              key={index}
              className={`w-1/12 h-2 bg-transparent ${
                index === 23 ? "" : "border border-gray-200"
              }`}
            />
          );
        })}
        <div className="absolute h-full rounded-r-full bg-green-700 z-50"></div>
      </div>
    </div>
  );
};
