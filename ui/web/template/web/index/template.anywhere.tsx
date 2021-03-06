/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Card, $CARD } from '@nextbnb/molecules';

/**
 *
 * @param {Object[]} items - List of categories to be displayed
 */
export const AnywhereTemplate: React.FC<{
  items?: any;
}> = ({ items = [undefined, undefined, undefined] }) => {
  const totalCards = items.length;

  return (
    <div>
      <div
        css={{
          padding: '0 70px',
        }}
      >
        <div
          css={{ gridTemplateColumns: `repeat(${totalCards}, 1fr)` }}
          // className={[template["category__carousel"]].join(" ")}
        >
          {items.map((item, index) => {
            return (
              <div key={index}>
                <Card
                  variant={$CARD.anywhere}
                  imgUrl={item?.imgUrl}
                  title={item?.title}
                  to={item?.to}
                  // extendsTo={[template["category__card"]].join(" ")}
                />
              </div>
            );
          })}
          <div
          // className={template["category__space"]}
          ></div>
        </div>
      </div>
    </div>
  );
};
