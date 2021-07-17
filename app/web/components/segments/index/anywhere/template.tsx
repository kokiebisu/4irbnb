import template from "@template/index/index.module.scss";

import { Card } from "@card";

export interface AnywhereSegmentTemplateProps {
  items: {
    imgUrl: string;
    title: string;
    to: string;
  }[];
}

/**
 *
 * @param {Object[]} items - List of categories to be displayed
 */
export const AnywhereSegmentTemplate: React.FC<AnywhereSegmentTemplateProps> = ({
  items,
}) => {
  return (
    <div>
      <div
        className={`grid-cols-4 ${[template["category__carousel"]].join(" ")}`}
      >
        {items.map((item, index) => {
          return (
            <div key={index}>
              <Card
                variant="anywhere"
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
