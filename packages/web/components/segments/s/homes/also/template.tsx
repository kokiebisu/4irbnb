import { useRef } from "react";
import { Card } from "@card";
import { Button } from "@atoms";
import { useSlider } from "@hooks/useSlider";
import { useHandleContainerResize } from "@hooks/useHandleContainerResize";

export type AlsoSegmentTemplateProps = {
  items: any;
  title: string;
};

/**
 * Renders the also section
 * @param {string[]} items - List of suggested cities
 */
export const AlsoSegmentTemplate: React.FC<AlsoSegmentTemplateProps> = ({
  items,
  title,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const width: number = useHandleContainerResize(containerRef)[0];
  const { state, previous, next } = useSlider(items, width, "also");

  return (
    <div className="overflow-x-hidden">
      <div ref={containerRef} className="flex items-center justify-between">
        <div className="my-4">
          <h3 className="text-lg">{title}</h3>
        </div>
        <div className="flex items-center">
          <div className="mx-2">
            <Button
              variant="paginate"
              direction="chevronLeft"
              onClick={previous}
              disabled={state.activeSlide === 0}
            />
          </div>
          <div className="mx-2">
            <Button
              variant="paginate"
              direction="chevronRight"
              onClick={next}
              disabled={
                state.activeSlide === items.length - (width > 728 ? 3 : 2)
              }
            />
          </div>
        </div>
      </div>
      <div
        className="h-full"
        style={{
          width: width * (items.length / 2),
          transform: `translateX(-${state.translate}px)`,
          transition: `transform ease-out ${state.transition}s`,
        }}
      >
        <div className="flex">
          {items.map((item: any, index: any) => {
            return (
              <div style={{ width: width / (width > 728 ? 3 : 2) }} key={index}>
                <div className="mb-3">
                  <Card
                    variant="nearby"
                    imgUrl={item?.pic}
                    city={item[0]?.city || "Item"}
                    hours={item[0]?.hours}
                    size="lg"
                  />
                </div>
                <div>
                  <Card
                    variant="nearby"
                    imgUrl={item?.pic}
                    city={item[1]?.city || "Item"}
                    hours={item[0]?.hours}
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
