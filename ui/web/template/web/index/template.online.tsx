/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Card, $CARD } from '@nextbnb/molecules/dist/bundle.esm';
import { Button, $BUTTON } from '@nextbnb/atoms/dist/bundle.esm';

/**
 * Renders the online section
 * @param {Object[]} items - List of online experiences for the landing page
 * @param {boolean} dark - Whether if the section is dark mode or not
 */
export const OnlineTemplate: React.FC<{
  items?: any;
  dark?: boolean;
}> = ({
  items = [
    {
      small:
        'https://a0.muscache.com/im/pictures/0e46f398-42f5-4897-9168-f84622aeba58.jpg',
      large:
        'https://a0.muscache.com/im/pictures/78010337-07f0-4154-9528-363b97b54699.jpg',
      title: 'Learn to make soup dumplings in Shanghai',
      to: '/experiences/1715106',
    },
    {
      small:
        'https://a0.muscache.com/im/pictures/50566ef1-6e6d-4672-be8c-33d132f69470.jpg',
      large:
        'https://a0.muscache.com/im/pictures/0735e435-3d1d-4aec-b536-9ee54f299ce6.jpg',
      title: 'Explore feminism with street art and graffiti',
      to: '/experiences/1755988',
    },
    {
      small:
        'https://a0.muscache.com/im/pictures/7d7d02c0-fe0c-4e6c-974e-029b91656e00.jpg',
      large:
        'https://a0.muscache.com/im/pictures/1793b6aa-4c3c-4193-a65a-09b440b2ca2c.jpg',
      title: 'Go backstage with a New York magician',
      to: '/experiences/1661222',
    },
    {
      small:
        'https://a0.muscache.com/im/pictures/701b98c5-0068-4bb7-9448-63d4275e679e.jpg',
      large:
        'https://a0.muscache.com/im/pictures/925f99bb-c5bc-4d82-9803-518abeef7e2e.jpg',
      title: 'Craft cocktails and talk gender with a bartender',
      to: '/experiences/1785860',
    },
  ],
  dark = false,
}) => {
  return (
    <div
      css={{
        ...(dark && { bg: 'black' }),
        marginTop: 16,
      }}
    >
      <div
        // className={[section["p__online"]].join(" ")}
        css={{
          position: 'relative',
        }}
      >
        <div
          css={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <div
            css={{
              height: '100%',
              overflowX: 'auto',
              overflowY: 'hidden',
              padding: '0 12px',
              paddingTop: 0,
              scrollPaddingTop: 0,
              scrollPaddingRight: 24,
              scrollSnapType: 'x mandatory',
            }}
          >
            <div
            //  className={[section["grid__online"]].join(" ")}
            >
              {items.map((item, index) => {
                return (
                  <div
                    key={index}
                    css={{
                      width: '100%',
                    }}
                    // className={`${[
                    //   section[`grid__online--${index}`],
                    //   section["grid__online--item"],
                    // ].join(" ")}} ${
                    //   index === 3 && [section["h__online--last"]].join()
                    // }`}
                  >
                    <Card
                      to={item.to}
                      variant={$CARD.online}
                      small={item.small}
                      large={item.large}
                      title={item.title}
                      inverse={dark}
                      extendsTo={{
                        display: 'block',
                        height: '100%',
                        width: '100%',
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        css={{
          margin: '32px 0',
        }}
      >
        <Button
          variant={$BUTTON.border}
          title="Explore all"
          size="sm"
          inverse={dark}
        />
      </div>
    </div>
  );
};
