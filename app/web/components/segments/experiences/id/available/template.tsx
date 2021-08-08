import { useLayoutEffect, useRef, useState } from "react";
import { Card } from "@card";
import { Button } from "@atoms";

export type AvailableSegmentTemplateProps = {
  availableSlots: {
    date: string;
    from: string;
    to: string;
    standard: string;
    price: number;
  }[];
};

/**
 * Renders the available section
 * @param {Object[]} availables - List of available dates for the experience
 */
export const AvailableSegmentTemplate: React.FC<AvailableSegmentTemplateProps> = ({
  availableSlots,
}) => {
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
  });
  const [width, setWidth] = useState(500);

  const evaluateColumns = () => {
    if (width > 1128) {
      return 5;
    } else if (width > 1028) {
      return 4;
    } else if (width > 728) {
      return 3;
    } else {
      return 2;
    }
  };

  const displayingColumns = evaluateColumns();

  const handleRef = () => {
    if (containerRef.current && containerRef.current.getBoundingClientRect()) {
      setWidth(containerRef.current.getBoundingClientRect().width);
    }
  };

  const handlePreviousSlide = () => {
    setState({
      ...state,
      activeSlide: state.activeSlide - 1,
      translate: (state.activeSlide - 1) * width,
    });
  };

  const handleNextSlide = () => {
    setState({
      ...state,
      activeSlide: state.activeSlide + 1,
      translate: (state.activeSlide + 1) * width,
    });
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    window.addEventListener("resize", handleRef);
    handleRef();
    return () => {
      window.removeEventListener("resize", handleRef);
    };
  });

  return (
    <div className="overflow-x-hidden">
      <div ref={containerRef} className="flex items-center justify-between">
        <div className="my-4">
          <h3 className="text-lg">Choose from available dates</h3>
        </div>
        <div className="flex items-center">
          <div className="mx-1">
            <Button
              variant="paginate"
              direction="chevronLeft"
              onClick={handlePreviousSlide}
              disabled={state.activeSlide === 0}
            />
          </div>
          <div className="mx-1">
            <Button
              variant="paginate"
              direction="chevronRight"
              onClick={handleNextSlide}
              disabled={
                state.activeSlide ===
                Math.ceil(availableSlots.length / displayingColumns) - 1
              }
            />
          </div>
        </div>
      </div>
      <div
        className="h-full"
        style={{
          width: width * (availableSlots.length / displayingColumns),
          transform: `translateX(-${state.translate}px)`,
          transition: `transform ease-out ${state.transition}s`,
        }}
      >
        <div className="flex">
          {availableSlots.map((available, index) => {
            return (
              <div
                style={{ width: width / displayingColumns }}
                key={index}
                // className={[section["w__nearby"]].join(" ")}
              >
                <div className="mb-3 mr-4">
                  <Card
                    variant="available"
                    date={available.date}
                    from={available.from}
                    to={available.to}
                    standard={available.standard}
                    price={available.price}
                    onClick={() => alert("yo")}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-5">
        <Button
          variant="border"
          title="See more dates"
          size="md"
          onClick={() => alert("yo")}
        />
      </div>
    </div>
  );
};
