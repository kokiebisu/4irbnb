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
    <div className="relative h-full w-full">
      <div
        className="inline-block h-full w-full"
        style={{
          verticalAlign: 'bottom',
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
              className="rounded-lg"
              aria-hidden="true"
              decoding="async"
              src={`${small}?im_w=720`}
            ></img>
          </picture>
        ) : (
          <div className="w-full bg-gray-300 rounded-lg pt-full" />
        )}
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 rounded-b-lg shadow-lg ${
          inverse ? 'bg-gray-600' : 'bg-white'
        }`}
      >
        <div
          className="pt-4 pr-4 pb-0 pl-4 w-full rounded-b-lg"
          style={{
            minHeight: 75,
          }}
        >
          <h4
            className={`${
              inverse ? 'text-white' : 'text-gray-600 text-base'
            } text-sm`}
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
    online: {
      component: <OnlineCard {...props} />,
      style: '',
    },
  };
};
