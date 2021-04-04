import { getParticipateContent } from './logic/logic.participate';

/**
 * Renders the participate card component
 * @param {string} categoryType - Type of participate card
 */
const ParticipateCard: React.FC<{
  categoryType?: string;
}> = ({ categoryType = 'call' }) => {
  const participates = getParticipateContent();
  return (
    <div
      style={{ minHeight: 300, width: 210 }}
      className="h-full p-4 border border-gray-300 rounded-md"
    >
      <div className="my-3">{participates[categoryType].icon}</div>
      <div className="mb-3">
        <h3 className="text-base">{participates[categoryType].title}</h3>
      </div>
      <div className="mb-3">
        <p className="text-sm">{participates[categoryType].description}</p>
      </div>
      {participates[categoryType].more && (
        <div>
          <h3 className="text-base">
            <u>{participates[categoryType].more}</u>
          </h3>
        </div>
      )}
    </div>
  );
};

export const participate = (props) => {
  return {
    participate: {
      component: <ParticipateCard {...props} />,
      style: '',
    },
  };
};
