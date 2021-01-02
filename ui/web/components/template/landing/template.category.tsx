/** styles **/
import space from "@styles/space.module.scss";
import template from "@template/landing/index.module.scss";

/** components */
import { Card } from "@card/card.component";

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
      <div className={[space["p-h--70"]].join(" ")}>
        <div
          style={{ gridTemplateColumns: `repeat(${totalCards}, 1fr)` }}
          className={[template["category__carousel"]].join(" ")}
        >
          {items.map((item, index) => {
            return (
              <Card
                variant="category"
                key={index}
                imgUrl={item?.imgUrl}
                title={item?.title}
                to={item?.to}
                extendsTo={[template["category__card"]].join(" ")}
              />
            );
          })}
          <div className={template["category__space"]}></div>
        </div>
      </div>
    </div>
  );
};
