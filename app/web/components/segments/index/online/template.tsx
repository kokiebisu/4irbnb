import { Card, $Card } from '@card';
import { Button } from '@atoms';
import section from '@template/index.module.scss';

export interface OnlineSegmentTemplateProps {
  items?: { small: string; large: string; title: string; to: string }[];
  dark?: boolean;
}

/**
 * Renders the online section
 * @param {Object[]} items - List of online experiences for the landing page
 * @param {boolean} dark - Whether if the section is dark mode or not
 */
export const OnlineSegmentTemplate: React.FC<OnlineSegmentTemplateProps> = ({
  items,
  dark,
}) => {
  return (
    <div className={`${dark ? 'bg-black' : ''} mt-4`}>
      <div
        className={[section['p__online']].join(' ')}
        style={{
          position: 'relative',
        }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0">
          <div
            className="h-full overflow-x-auto overflow-y-hidden py-3 pt-0"
            style={{
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
                    className={`w-full ${[
                      section[`grid__online--${index}`],
                      section['grid__online--item'],
                    ].join(' ')}} ${
                      index === 3 && [section['h__online--last']].join()
                    }`}
                  >
                    <div className="block h-full w-full">
                      <Card
                        to={item.to}
                        variant={$Card.ONLINE}
                        small={item.small}
                        large={item.large}
                        title={item.title}
                        inverse={dark}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <Button variant="border" title="Explore all" size="sm" inverse={dark} />
      </div>
    </div>
  );
};
