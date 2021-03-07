/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button, $BUTTON } from '@nextbnb/atoms-button/dist/bundle.esm';
import { Star } from '@nextbnb/design/assets/svg/original';

/**
 * Renders the modal which gives all the available options
 * @param {number} ratings - Average ratings from the users
 * @param {number} reviews - Total number of reviews from the users
 */
const AvailabilityBar: React.FC<{
  ratings?: number;
  reviews?: number;
}> = ({ ratings = 4.99, reviews = 271 }) => {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      sx={{
        borderTop: '1px solid',
        borderColor: 'grey.300',
      }}
    >
      <div css={{ padding: '16px 0' }}>
        <p>Add dates for prices</p>
        <div css={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <Star width={12} />
          </div>
          <div>
            <span
              css={{ display: 'inline-block', fontSize: 12, marginLeft: 4 }}
            >
              {ratings}
            </span>
            <span
              css={{ display: 'inline-block', fontSize: 12, marginLeft: 4 }}
              sx={{ color: 'grey.400' }}
            >
              ({reviews})
            </span>
          </div>
        </div>
      </div>
      <div>
        <Button variant={$BUTTON.primary} title="Check availability" />
      </div>
    </div>
  );
};

export const availability = (props) => {
  return {
    availability: {
      component: <AvailabilityBar {...props} />,
      css: {},
    },
  };
};
