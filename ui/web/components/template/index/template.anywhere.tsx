import space from "@styles/space.module.scss";
import template from "@template/index/index.module.scss";

import { Card } from "@card";
import * as $card from "@card/variants";

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
              <div key={index}>
                <Card
                  variant={$card.ANYWHERE}
                  imgUrl={item?.imgUrl}
                  title={item?.title}
                  to={item?.to}
                  extendsTo={[template["category__card"]].join(" ")}
                />
              </div>
            );
          })}
          <div className={template["category__space"]}></div>
        </div>
      </div>
    </div>
  );
};
