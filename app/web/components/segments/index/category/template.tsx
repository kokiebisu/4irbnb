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
      <div style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}>
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
        <div></div>
      </div>
    </div>
  );
};
