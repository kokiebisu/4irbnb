import template from "@template/index/index.module.scss";

import { Card } from "@card";

export interface CategorySegmentTemplateProps {
  items: { imgUrl: string; title: string; to: string }[];
}

/**
 *
 * @param {Object[]} items - List of categories to be displayed
 */
export const CategorySegmentTemplate: React.FC<CategorySegmentTemplateProps> = ({
  items,
}) => {
  return (
    <div>
      <div
        style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}
        className={[template["category__carousel"]].join(" ")}
      >
        {items.map((item, index) => {
          return (
            <div key={index}>
              <Card
                variant="category"
                imgUrl={item?.imgUrl}
                title={item?.title}
              />
            </div>
          );
        })}
        <div className={template["category__space"]}></div>
      </div>
    </div>
  );
};
