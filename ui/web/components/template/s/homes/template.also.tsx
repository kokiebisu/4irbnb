import { useRef } from "react";

import { Card } from "@card";
import { Button } from "@button";

import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";
import section from "@template/index.module.scss";

import * as Helpers from "@helper/array";

import { useSlider } from "@hooks/useSlider";
import { useHandleContainerResize } from "@hooks/useHandleContainerResize";

/**
 * Renders the also section
 * @param {string[]} items - List of suggested cities
 */
export const AlsoTemplate: React.FC<{
  items?: any;
  title?: string;
}> = ({
  items = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ],
  title = "Section title",
}) => {
  const containerRef = useRef<HTMLDivElement>();
  const width: number = useHandleContainerResize(containerRef)[0];
  const { state, previous, next } = useSlider(items, width, "also");
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
          <div className={[space["m-h--2"]].join(" ")}>
            <Button
              variant="paginate"
              animate
              direction="left"
              onClick={previous}
              disable={state.activeSlide === 0}
            />
          </div>
          <div className={[space["m-h--2"]].join(" ")}>
            <Button
              variant="paginate"
              animate
              direction="right"
              onClick={next}
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
                    variant="nearby"
                    to={item[0]?.to}
                    imgUrl={item?.pic}
                    title={item[0]?.city || "Item"}
                    subtitle={`${item[0]?.hours || 1} hour drive`}
                    size="lg"
                  />
                </div>
                <div>
                  <Card
                    variant="nearby"
                    to={item[1]?.to}
                    imgUrl={item?.pic}
                    title={item[1]?.city || "Item"}
                    subtitle={`${item[0]?.hours || 1} hour drive`}
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
