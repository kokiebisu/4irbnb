/** styles **/
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import shape from "@styles/shape.module.scss";

/** components */
import { Section } from "@section/section.component";
import { Bar } from "@bar/bar.component";
import { Button } from "@button/button.component";

/** stories */
import { filter } from "@button/button.stories";

/**
 * Renders the category template component
 * @param {string} stayType - Type of stay
 * @param {number} filterCount - Number of filters
 * @param {Object[]} filters - List of filters
 */
export const CategoryPrototype: React.FC<{
  stayType?: string | string[];
  filterCount?: number;
  filters?: any;
}> = ({
  stayType = "house",
  filterCount = 1,
  filters = [
    { name: "Cancellation flexibility" },
    { name: "Type of place" },
    { name: "Price" },
    { name: "Instant Book" },
    { name: "More filters" },
  ],
}) => {
  const displayTitle = () => {
    if (
      stayType.includes("tent") ||
      stayType.includes("barn") ||
      stayType.includes("tiny_house")
    ) {
      return "Unique stays";
    }
    switch (stayType) {
      case "house":
        return "Entire homes";
    }
  };
  return (
    <div className={[space["p--24"]].join(" ")}>
      <div>
        <p className={[font["size--14"]].join(" ")}>300+ stays</p>
      </div>
      <div>
        <h3 className={[font["size--32"]].join(" ")}>{displayTitle()}</h3>
      </div>
      <div className={[space["m-v--22"]].join(" ")}>
        <div className={[shape["from__md--flex"]].join(" ")}>
          {filters.map((filter, index) => {
            return (
              <div key={index} className={[space["m-r--8"]].join(" ")}>
                <Button {...filter.args} name={filter.name} />
              </div>
            );
          })}
        </div>
        <div className={[shape["only__sm"]].join(" ")}>
          <Button {...filter.args} name={`filters ${filterCount}`} />
        </div>
      </div>
      <div className={[space["m-b--32"]].join(" ")}>
        <Section variant="stay" title="Paris" pagination />
      </div>
      <div className={[space["m-b--50"]].join(" ")}>
        <Section variant="also" title="Other popular destinations" />
      </div>
      <div className={[space["m-b--45"]].join(" ")}>
        <Section variant="homes" layout="vertical" location={location} />
      </div>
      <div
        className={[
          space["m-t--16"],
          layout["flex"],
          layout["justify-center"],
        ].join(" ")}
      >
        <Bar variant="paginate" animate />
      </div>
    </div>
  );
};
