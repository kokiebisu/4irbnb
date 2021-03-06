/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Card, $Card } from '@nextbnb/molecules';

/**
 *
 * @param {Object[]} items - List of categories to be displayed
 */
export const CategoryTemplate: React.FC<{
  items?: any;
}> = ({ items = [undefined, undefined, undefined] }) => {
  const totalCards = items.length;

  return (
    <div>
      <div>
        <div
          css={{
            gridTemplateColumns: `repeat(${totalCards}, 1fr)`,
            display: 'grid',
            gridAutoFlow: 'column',
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollSnapType: 'x mandatory',
            columnGap: 14,
            rowGap: 14,
            scrollPadding: '0 24px',
            '::-webkit-scrollbar': {
              width: 0,
              background: 'transparent',
            },
          }}
          sx={{
            margin: ['0 -24px', '0 -24px', '0'],
            padding: ['4px 28px 4px', '4px 28px 4px', '4px 0'],
            width: ['auto', 'auto', '100%'],
          }}
        >
          {items.map((item, index) => {
            return (
              <div
                key={index}
                css={{
                  scrollSnapAlign: 'start',
                  height: '100%',
                }}
                sx={{
                  width: [250, 250, 'auto'],
                  maxWidth: ['auto', 'auto', 550],
                }}
              >
                <Card
                  variant={$Card.CATEGORY}
                  imgUrl={item?.imgUrl}
                  title={item?.title}
                  to={item?.to}
                />
              </div>
            );
          })}
          <div
            css={{
              width: 12,
              bg: 'transparent',
              height: '100%',
            }}
            sx={{
              display: ['block', 'block', 'none'],
            }}
          />
        </div>
      </div>
    </div>
  );
};
