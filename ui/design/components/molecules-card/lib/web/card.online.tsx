/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { $CARD } from '../constant/appearance';
import { renderSize } from '../logic/logic.nearby';

/**
 * Renders the online card component
 * @param {string} small - Image with smaller pixels
 * @param {string} large - Image with larger pixels
 * @param {string} title - Title of the card
 * @param {boolean} inverse - Whether if the component takes the inverse styling or not
 */
const OnlineCard: React.FC<{
  small?: string;
  large?: string;
  title?: string;
  inverse?: boolean;
}> = ({
  small,
  large,
  title = 'Learn to make soup dumplings in Shanghai',
  inverse = false,
}) => {
  return (
    <div css={{ height: '100%', width: '100%', position: 'relative' }}>
      <div
        css={{
          display: 'inline-block',
          verticalAlign: 'bottom',
          minHeight: 1,
          height: '100%',
          width: '100%',
        }}
      >
        {small && large ? (
          <picture>
            <source
              srcSet={`${large}?im_w=480 1x, ${large}?im_w=960 2x`}
              media="(min-width: 743.1px) and (max-width: 1127px)"
            ></source>
            <source
              srcSet={`${large}?im_w=480 1x, ${large}?im_w=1200 2x`}
              media="(min-width: 1127.1px) and (max-width: 1439px)"
            ></source>
            <source
              srcSet={`${large}?im_w=720 1x, ${large}?im_w=1680 2x`}
              media="(min-width: 1439.1px)"
            ></source>
            <img
              style={{ objectFit: 'cover', verticalAlign: 'bottom' }}
              css={{ borderRadius: 20 }}
              aria-hidden="true"
              decoding="async"
              src={`${small}?im_w=720`}
            ></img>
          </picture>
        ) : (
          <div
            css={{ width: '100%', borderRadius: 20, paddingTop: '100%' }}
            sx={{ bg: 'grey.300' }}
          />
        )}
      </div>
      <div
        css={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 8px',
        }}
        sx={{ ...(inverse ? { bg: 'grey.900' } : { bg: 'white' }) }}
      >
        <div
          css={{
            padding: '15px 15px 0 15px',
            width: '100%',
            minHeight: 75,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
          }}
        >
          <h4
            css={{
              fontSize: 15,
              ...(inverse ? { color: 'white' } : { fontWeight: 500 }),
            }}
          >
            {title}
          </h4>
        </div>
      </div>
    </div>
  );
};

export const online = (props) => {
  return {
    [$CARD.online]: {
      component: <OnlineCard {...props} />,
      css: {},
    },
  };
};
