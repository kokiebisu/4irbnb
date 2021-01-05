/** styles **/
import space from "@styles/space.module.scss";
import template from "@template/index/index.module.scss";

/** components */
import { Card } from "@card";

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
      <div className={[space["p-h--70"]].join(" ")}>
        <div
          style={{ gridTemplateColumns: `repeat(${totalCards}, 1fr)` }}
          className={[template["category__carousel"]].join(" ")}
        >
          {items.map((item, index) => {
            return (
              <Card
                variant="anywhere"
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
