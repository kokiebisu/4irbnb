import { Card, $Card } from '@card';
import { Button, $Button } from '@button';

import section from '@template/index.module.scss';
import color from '@styles/color.module.scss';
import space from '@styles/space.module.scss';
import layout from '@styles/layout.module.scss';
import shape from '@styles/shape.module.scss';

export interface OnlineTemplateProps {
  items?: { small: string; large: string; title: string; to: string }[];
  dark?: boolean;
}

/**
 * Renders the online section
 * @param {Object[]} items - List of online experiences for the landing page
 * @param {boolean} dark - Whether if the section is dark mode or not
 */
export const OnlineTemplate: React.FC<OnlineTemplateProps> = ({
  items,
  dark,
}) => {
  return (
    <div
      className={`${dark && color['bg--black']} ${[space['m-t--16']].join(
        ' '
      )}`}
    >
      <div
        className={[section['p__online']].join(' ')}
        style={{
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <div
            style={{
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
            <div className={`${[section['grid__online']].join(' ')} pb-4`}>
              {items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${[
                      shape['w--full'],
                      section[`grid__online--${index}`],
                      section['grid__online--item'],
                    ].join(' ')}} ${
                      index === 3 && [section['h__online--last']].join()
                    }`}
                  >
                    <Card
                      to={item.to}
                      variant={$Card.ONLINE}
                      small={item.small}
                      large={item.large}
                      title={item.title}
                      inverse={dark}
                      extendsTo={[
                        layout['block'],
                        shape['h--full'],
                        shape['w--full'],
                      ].join(' ')}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={[space['m-v--32']].join(' ')}>
        <Button
          variant={$Button.BORDER}
          title="Explore all"
          size="sm"
          inverse={dark}
        />
      </div>
    </div>
  );
};
