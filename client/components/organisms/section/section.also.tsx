import React, { useRef } from "react";

/**
 * Props
 */
import { AlsoSectionProps } from "./props";

/**
 * Components
 */
import { Card } from "../../molecules/card/card.component";
import { Button } from "../../../components/atoms/button/button.component";

/**
 * Styles
 */
import layout from "../../../styles/layout.module.scss";
import font from "../../../styles/font.module.scss";
import space from "../../../styles/space.module.scss";
import section from "./section.module.scss";

/**
 * Helpers
 */
import * as Helpers from "../../../helper/array";

/**
 * Content
 */
import { nearbyPic } from "../../../content";
import { useSlider } from "../../../hooks/useSlider";
import { useHandleContainerWidthResize } from "../../../hooks/useHandleContainerWidthResize";

/**
 * Renders the also section
 * @param {string[]} items - List of suggested cities
 */
export const AlsoSection: React.FC<AlsoSectionProps> = ({
  items = [
    "city1",
    "city2",
    "city3",
    "city4",
    "city5",
    "city6",
    "city7",
    "city8",
  ],
  title = "People also search for",
}) => {
  const containerRef = useRef<HTMLDivElement>();
  const width: number = useHandleContainerWidthResize(containerRef);
  const { state, previousSlide, nextSlide } = useSlider(items, width, "also");
  const displayingItems = Helpers.groupByTwo(items);

  return (
    <div style={{ overflowX: "hidden" }}>
      <div
        ref={containerRef}
        className={[
          layout["flex"],
          layout["items-center"],
          layout["justify-between"],
        ].join(" ")}
      >
        <div className={[space["m-v--16"]].join(" ")}>
          <h3 className={[font["size--20"]].join(" ")}>{title}</h3>
        </div>
        <div className={[layout["flex"], layout["items-center"]].join(" ")}>
          <div className={[space["m-h--4"]].join(" ")}>
            <Button
              type="paginate"
              animate
              direction="left"
              onPress={previousSlide}
              disable={state.activeSlide === 0}
            />
          </div>
          <div className={[space["m-h--4"]].join(" ")}>
            <Button
              type="paginate"
              animate
              direction="right"
              onPress={nextSlide}
              disable={
                state.activeSlide === items.length / 2 - (width > 728 ? 3 : 2)
              }
            />
          </div>
        </div>
      </div>
      <div
        style={{
          height: "100%",
          width: width * (items.length / 2),
          transform: `translateX(-${state.translate}px)`,
          transition: `transform ease-out ${state.transition}s`,
        }}
      >
        <div style={{ display: "flex" }}>
          {displayingItems.map((item, index) => {
            return (
              <div
                style={{ width: width / (width > 728 ? 3 : 2) }}
                key={index}
                className={[section["w__nearby"]].join(" ")}
              >
                <div className={[space["m-b--10"]].join(" ")}>
                  <Card
                    type="nearby"
                    to={item[0] && item[0].to}
                    imgUrl={nearbyPic[index]}
                    city={item[0].city}
                    hours={item[0].hours}
                    size="lg"
                  />
                </div>
                <div>
                  <Card
                    type="nearby"
                    to={item[1] && item[1].to}
                    imgUrl={nearbyPic[index + 4]}
                    city={item[1].city}
                    hours={item[1].hours}
                    size="lg"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
