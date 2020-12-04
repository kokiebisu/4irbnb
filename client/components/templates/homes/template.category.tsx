import React from "react";

/**
 * Components
 */
import { Header } from "../../organisms/header/header.component";

/**
 * Styles
 */
import layout from "../../../styles/layout.module.scss";
import homes from "../../../styles/homes.module.scss";
import space from "../../../styles/space.module.scss";
import responsive from "../../../styles/responsive.module.scss";
import font from "../../../styles/font.module.scss";
import shape from "../../../styles/shape.module.scss";

/**
 * Components
 */
import { Section } from "../../organisms/section/section.component";
import { Bar } from "../../organisms/bar/bar.component";
import { Footer } from "../../organisms/footer/footer.component";
import { Button } from "../../atoms/button/button.component";

/**
 * Props
 */
import { CategoryTemplateProps } from "../props";

/**
 * Renders the category template component
 * @param {string} stayType - Type of stay
 * @param {number} filterCount - Number of filters
 * @param {Object[]} filters - List of filters
 */
export const CategoryTemplate: React.FC<CategoryTemplateProps> = ({
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
    <div>
      <div style={{ zIndex: 9999, position: "sticky", top: 0 }}>
        <Header type="white" spread />
      </div>
      <div
        className={[layout["relative"], homes["display__content"]].join(" ")}
      >
        <div className={[homes["w__section"]].join(" ")}>
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
                      <Button type="filter" name={filter.name} />
                    </div>
                  );
                })}
              </div>
              <div className={[shape["only__sm"]].join(" ")}>
                <Button type="filter" name={`filters ${filterCount}`} />
              </div>
            </div>
            <div className={[space["m-b--32"]].join(" ")}>
              <Section type="stay" title="Paris" pagination />
            </div>
            <div className={[space["m-b--50"]].join(" ")}>
              <Section type="also" title="Other popular destinations" />
            </div>
            <div className={[space["m-b--45"]].join(" ")}>
              <Section type="homes" layout="vertical" location={location} />
            </div>
            <div
              className={[
                space["m-t--16"],
                layout["flex"],
                layout["justify-center"],
              ].join(" ")}
            >
              <Bar type="paginate" animate />
            </div>
          </div>
        </div>
        <div
          className={[responsive["n_to_b--md"]].join(" ")}
          style={{
            position: "absolute",
            backgroundColor: "gray",
            overflow: "hidden",
            width: "calc(100% - 840px)",
            height: "100%",
            top: 0,
            bottom: 0,
            right: 0,
            left: "auto",
          }}
        >
          map
        </div>
      </div>
      <Footer />
    </div>
  );
};
