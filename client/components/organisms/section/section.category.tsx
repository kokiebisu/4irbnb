/** styles **/
import section from "@section/section.module.scss";
import space from "@styles/space.module.scss";

/** components */
import { Card } from "@card/card.component";

/**
 *
 * @param {Object[]} items - List of categories to be displayed
 */
export const CategorySection: React.FC<{
  items?: any;
}> = ({ items = [undefined, undefined, undefined] }) => {
  const totalCards = items.length;

  return (
    <div>
      <div className={[space["p-h--70"]].join(" ")}>
        <div
          style={{ gridTemplateColumns: `repeat(${totalCards}, 1fr)` }}
          className={[section["category-section__carousel"]].join(" ")}
        >
          {items.map((item, index) => {
            return (
              <Card
                variant="category"
                key={index}
                imgUrl={item && item.imgUrl}
                title={item && item.title}
                to={item && item.to}
              />
            );
          })}
          <div className={section["category-section__card--space"]}></div>
        </div>
      </div>
    </div>
  );
};
