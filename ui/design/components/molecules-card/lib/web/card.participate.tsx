/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { $CARD } from '../constant/appearance';
import { getParticipateContent } from '../logic/logic.participate';

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
      css={{
        minHeight: 300,
        width: 210,
        height: '100%',
        padding: 16,
        borderRadius: 6,
      }}
      sx={{
        border: '1px solid',
        borderColor: 'grey.300'
      }}
    >
      <div css={{ margin: '12px 0' }}>{participates[categoryType].icon}</div>
      <div css={{ marginBottom: 12 }}>
        <h3 css={{ fontSize: 16 }}>{participates[categoryType].title}</h3>
      </div>
      <div css={{ marginBottom: 12 }}>
        <p css={{ fontSize: 14 }}>{participates[categoryType].description}</p>
      </div>
      {participates[categoryType].more && (
        <div>
          <h3 css={{ fontSize: 16 }}>
            <u>{participates[categoryType].more}</u>
          </h3>
        </div>
      )}
    </div>
  );
};

export const participate = (props) => {
  return {
    [$CARD.participate]: {
      component: <ParticipateCard {...props} />,
      css: {},
    },
  };
};
