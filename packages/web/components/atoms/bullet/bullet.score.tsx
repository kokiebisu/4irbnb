/**
 * Renders the score bullet
 * @param {string} category - Type of score bullet
 * @param {number} average - Average score
 */
const ScoreBullet: React.FC<{
  category?: string;
  average?: number;
  reviews?: {
    imgUrl: string;
    name: string;
    date: string;
    description: string;
  }[];
}> = ({ category = 'Aspect', average = 5.0 }) => {
  return (
    <div className="py-1 flex itesm-center justify-between w-1/2">
      <p className="font-light">{category}</p>
      <div className="flex items-center w-full">
        <div>
          <div className="relative h-3 bg-gray-300">
            <span className="absolute t-0 l-0 b-0 bg-black w-1/2"></span>
          </div>
        </div>
        <p className="pr-4 text-2xs">{average}</p>
      </div>
    </div>
  );
};

export const score = (props) => {
  return {
    score: { component: <ScoreBullet {...props} /> },
  };
};
