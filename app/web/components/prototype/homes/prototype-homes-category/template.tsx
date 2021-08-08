import { Bar } from "@bar";
import { Button } from "@atoms";

export type CategoryPrototypeStayTypeVariants =
  | "tent"
  | "barn"
  | "tiny_house"
  | "house";
export interface CategoryPrototypeTemplateProps {
  subtitle: string;
  stayType: CategoryPrototypeStayTypeVariants;
  filterCount: number;
  filters: any;
}

/**
 * Renders the category template component
 * @param {string} stayType - Type of stay
 * @param {number} filterCount - Number of filters
 * @param {Object[]} filters - List of filters
 */
export const CategoryPrototypeTemplate: React.FC<CategoryPrototypeTemplateProps> = ({
  subtitle,
  stayType,

  filters,
}) => {
  const displayTitle = () => {
    if (
      stayType?.includes("tent") ||
      stayType?.includes("barn") ||
      stayType?.includes("tiny_house")
    ) {
      return "Unique stays";
    }
    switch (stayType) {
      case "house":
        return "Entire homes";
      default:
        return "Section title";
    }
  };
  return (
    <div className="p-4">
      <div>
        <p className="size-md">{subtitle}</p>
      </div>
      <div>
        <h3 className="text-4xl">{displayTitle()}</h3>
      </div>
      <div className="my-4">
        <div
          style={{ scrollSnapType: "x mandatory" }}
          className="flex overflow-x-auto"
        >
          {filters.map((filter: any, index: any) => {
            return (
              <div
                key={index}
                className="mr-2"
                style={{ scrollSnapAlign: "start" }}
              >
                <Button
                  variant="filter"
                  label={filter.name}
                  inverse={!filter.selected}
                  onClick={() => alert("clicked")}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="mb-5">
        <Segment variant="stay" pagination />
      </div>
      <div className="mb-6">
        <Segment variant="also" />
      </div>
      <div className="mb-5">
        <Segment variant="homes" layout="vertical" location={location} />
      </div> */}
      <div className="mt-4 flex justify-center">
        <Bar variant="paginate" page={3} total={5} />
      </div>
    </div>
  );
};
