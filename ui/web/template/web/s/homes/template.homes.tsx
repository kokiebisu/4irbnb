/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Card, $Card } from '@nextbnb/molecules';

/**
 * Renders the homes section
 * @param {string} layout - Layout of how to list the items
 * @param {string} title - Title of the section
 * @param {Object[]} stays - List of objects containing the stays
 */
export const HomesTemplate: React.FC<{
  filterCount?: number;
  place?: string;
  guests?: number;
  average?: number;
  stays?: any;
  title?: string;
  layout?: 'vertical' | 'horizontal';
}> = ({
  layout = 'vertical',
  title = 'Section Title',
  stays = [undefined, undefined, undefined],
}) => {
  const layouts = {
    vertical: (
      <div
        css={{
          ...(title ? { marginTop: 45 } : { marginTop: 24 }),
        }}
      >
        {title && (
          <div>
            <h3
              css={{
                fontSize: 22,
              }}
            >
              {title}
            </h3>
          </div>
        )}
        <div>
          {stays.map((stay, index) => {
            return (
              <div key={index}>
                <Card
                  extendsTo={!title && { borderTop: '1px solid grey.300' }}
                  variant={$Card.STAY}
                  {...stay}
                />
              </div>
            );
          })}
        </div>
      </div>
    ),
  };

  return layouts[layout];
};
