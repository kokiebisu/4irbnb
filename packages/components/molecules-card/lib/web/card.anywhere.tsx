/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { $CARD } from '../constant/appearance';

/** Renders the category card component
 * @param {string} imgUrl - Image of the card
 * @param {string} title - Title of the card
 */
const AnywhereCard: React.FC<{
  imgUrl?: string;
  title?: string;
}> = ({ imgUrl, title = 'Title' }) => {
  return (
    <div>
      <div css={{ position: 'relative', paddingTop: '100%' }}>
        <div
          css={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}
        >
          <div css={{ width: '100%', height: '100%' }}>
            {imgUrl ? (
              <img src={imgUrl} alt="unique stays" css={{ borderRadius: 8 }} />
            ) : (
              <div
                sx={{ bg: 'grey.300' }}
                css={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 8,
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div css={{ marginTop: 6 }}>
        <h3 css={{ fontSize: 16 }} sx={{ color: 'grey.900' }}>
          {title}
        </h3>
      </div>
    </div>
  );
};

export const anywhere = (props) => {
  return {
    [$CARD.anywhere]: {
      component: <AnywhereCard {...props} />,
      css: {},
    },
  };
};
