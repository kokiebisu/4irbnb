/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { $CARD } from '../constant/appearance';
import { renderSize } from '../logic/logic.nearby';

/**
 * Renders the nearby card component
 * @param {string} imgUrl - Image of the card
 * @param {string} city - Name of the city
 * @param {number} hours - Time it takes to reach the destination
 * @param {string} size - Size of the component
 */
const NearbyCard: React.FC<{
  imgUrl?: string;
  city?: string;
  hours?: number;
  size?: 'sm' | 'lg';
}> = ({ imgUrl, city = 'City', hours = 1, size = 'sm' }) => {
  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <div css={{ ...renderSize(size), marginRight: 12 }}>
        {imgUrl ? (
          <img src={imgUrl} css={{ borderRadius: 10 }} />
        ) : (
          <div
            css={{
              height: 50,
              width: 50,
              borderRadius: 10,
            }}
            sx={{
              bg: 'lightgray',
            }}
          />
        )}
      </div>
      <div>
        <h3 css={{ fontSize: 15, marginBottom: 4 }}>{city}</h3>
        <p css={{ fontSize: 15 }}>{hours} hour drive</p>
      </div>
    </div>
  );
};

export const nearby = (props) => {
  return {
    [$CARD.nearby]: {
      component: <NearbyCard {...props} />,
      css: {},
    },
  };
};
