/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';

import { Button, $BUTTON } from '@nextbnb/atoms-button/dist/bundle.esm';
import { $CARD } from '../constant/appearance';

/**
 * Renders the host card component
 * @param {string} imgUrl - Image of the host
 * @param {string} host - Name of the host
 * @param {string} stayType - Type of stay
 * @param {string} location - Location of the stay
 */
const HostCard: React.FC<{
  imgUrl?: string;
  host?: string;
  stayType?: string;
  location?: string;
  navigate?: any;
}> = ({
  imgUrl,
  host = 'Host',
  stayType = 'Type',
  location = 'Location',
  navigate,
}) => {
  return (
    <div>
      <div>
        {imgUrl ? (
          <img
            css={{
              borderRadius: 20,
              objectFit: 'cover',
              height: 434,
              width: 350,
            }}
            src={imgUrl}
          />
        ) : (
          <div
            css={{ borderRadius: 20, height: 434, width: 350 }}
            sx={{ bg: 'grey.300' }}
          />
        )}
      </div>
      <div css={{ marginTop: 6 }}>
        <h3>{host}</h3>
      </div>
      <div css={{ margin: '8px 0' }}>
        <h4
          css={{
            textTransform: 'capitalize',
            letterSpacing: 0.4,
            fontSize: 15,
          }}
          sx={{ color: 'grey.900' }}
        >
          Hosts a {stayType} in {location}
        </h4>
      </div>
      <div>
        <Button
          onClick={() => navigate('/')}
          variant={$BUTTON.underline}
          title={`Check out some ${stayType}s`}
        />
      </div>
    </div>
  );
};

export const host = (props) => {
  return {
    [$CARD.host]: {
      component: <HostCard {...props} />,
      css: {},
    },
  };
};
