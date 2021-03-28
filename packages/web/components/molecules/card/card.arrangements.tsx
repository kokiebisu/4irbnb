import { DoubleBed } from '@svg/original';

/**
 * Renders the arrangements card component
 * @param {Object} card - Information of the card
 */
export const ArrangementsCard: React.FC<{ card?: any }> = ({
  card = {
    type: 'Bedroom',
    beds: [{ type: 'double bed', count: 1 }],
  },
}) => {
  return (
    <div className="w-52 py-6 border border-gray-300 rounded-md">
      <div className="pl-4">
        <div className="pt-1 pb-2">
          <DoubleBed width={24} />
        </div>
        <p className="pt-1 text-gray-500">Bedroom</p>
        <div>
          {card.beds.map((bed, index) => {
            return (
              <p key={index} className="text-gray-500">
                {bed.count} {bed.type}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
