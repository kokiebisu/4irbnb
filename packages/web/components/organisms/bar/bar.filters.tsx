import { Button, $Button } from "@button";
import space from "@styles/space.module.scss";
import { useLayoutEffect, useRef, useState } from "react";

export const FiltersBar: React.FC<{}> = () => {
  const [width, setWidth] = useState(500);
  const containerRef = useRef<HTMLDivElement>();
  const handleRef = () => {
    if (containerRef.current && containerRef.current.getBoundingClientRect()) {
      setWidth(containerRef.current.getBoundingClientRect().width);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", handleRef);
    handleRef();
    return () => {
      window.removeEventListener("resize", handleRef);
    };
  });
  const primaryFilters = ["Filters", "Dates", "Group size"];
  const secondaryFilters = [
    "Great for groups",
    "Family friendly",
    "Animals",
    "Arts & writing",
    "Baking",
    "Cooking",
    "Dance",
    "Drinks",
    "Entertainment",
    "Fitness",
    "History & culture",
    "Magic",
    "Music",
    "Social impact",
    "Wellness",
    "Olympians & Paralympians",
    "Designed for accessibility",
  ];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
  });

  const previous = () => {
    // if (state.activeSlide === 0) {
    //   return setState({
    //     ...state,
    //     translate: (displayingLength[type] - 1) * displayingWidth[type],
    //     activeSlide: displayingLength[type] - 1,
    //   });
    // }

    setState({
      ...state,
      activeSlide: state.activeSlide - 1,
      translate: (state.activeSlide - 1) * 300,
    });
  };

  const next = () => {
    // if (state.activeSlide === displayingLength[type] - 1) {
    //   return setState({
    //     ...state,
    //     translate: 0,
    //     activeSlide: 0,
    //   });
    // }
    setState({
      ...state,
      activeSlide: state.activeSlide + 1,
      translate: (state.activeSlide + 1) * 300,
    });
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ display: "flex" }}>
        {primaryFilters.map((filter, index) => {
          return (
            <div key={index} className={[space["m-r--8"]].join(" ")}>
              <Button variant={$Button.FILTER} inverse label={filter} />
            </div>
          );
        })}
      </div>
      <div
        className={[space["m-r--8"]].join(" ")}
        style={{
          height: 35,
          width: 2,
          backgroundColor: "lightgray",
          position: "relative",
        }}
      />
      <div
        ref={containerRef}
        style={{ overflowX: "hidden", position: "relative", padding: "2px 0" }}
      >
        {state.activeSlide > 0 && (
          <div
            style={{
              height: "100%",
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: 40,
              width: 65,
              display: "flex",
              alignItems: "center",
              backgroundImage:
                "linear-gradient(to right, rgb(255, 255, 255) 56.77%, rgba(255, 255, 255, 0) 94.47%)",
            }}
          >
            <Button
              variant={$Button.PAGINATE}
              direction="left"
              size={12}
              onClick={previous}
            />
          </div>
        )}
        <div
          style={{
            display: "flex",
            position: "relative",
            transform: `translateX(-${state.translate}px)`,
            transition: `transform ease-out ${state.transition}s`,
          }}
        >
          {state.activeSlide > 0 && (
            <div style={{ position: "absolute", left: 0, zIndex: 40 }}>
              <Button variant={$Button.PAGINATE} direction="left" />
            </div>
          )}
          {secondaryFilters.map((filter, index) => {
            return (
              <div key={index} className={[space["m-r--8"]].join(" ")}>
                <Button
                  variant={$Button.FILTER}
                  label={filter}
                  onClick={previous}
                />
              </div>
            );
          })}
        </div>
        {state.activeSlide < 3 && (
          <div
            style={{
              height: "100%",
              position: "absolute",
              right: 0,
              top: 0,
              zIndex: 40,
              width: 65,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              backgroundImage:
                "linear-gradient(to left, rgb(255, 255, 255) 56.77%, rgba(255, 255, 255, 0) 94.47%)",
            }}
          >
            <Button
              variant={$Button.PAGINATE}
              direction="right"
              size={12}
              onClick={next}
            />
          </div>
        )}
      </div>
    </div>
  );
};
