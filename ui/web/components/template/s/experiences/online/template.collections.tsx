import space from "@styles/space.module.scss";
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";

import React, { useLayoutEffect, useRef, useState } from "react";
import { Button } from "@button";
import { Card } from "@card";

export const CollectionsTemplate: React.FC<{ title?: String }> = ({
  title = "Title here",
}) => {
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.7,
  });

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

  const collectionStyles = () => {
    if (width > 1128) {
      return {
        width: width * (temporaryCards.length / 2),
        transform: `translateX(-${state.translate}px)`,
      };
    }
    if (width > 728) {
      return {
        width: width * (temporaryCards.length / 2),
        transform: `translateX(-${state.translate}px)`,
      };
    }
    return {
      width: width * (temporaryCards.length / 2),
      transform: `translateX(-${state.translate}px)`,
    };
  };

  const cardStyles = () => {
    if (width > 1128) {
      return {
        width: width / 2,
      };
    }
    if (width > 728) {
      return {
        width: 550,
      };
    }
    return {
      width: width,
    };
  };

  const paddingTopStyles = () => {
    if (width > 728) {
      return 60;
    }
    return 120;
  };

  const temporaryCards = [undefined, undefined, undefined];

  const previous = () => {
    if (width > 1128) {
      return setState({
        ...state,
        activeSlide: state.activeSlide - 1,
        translate: (state.activeSlide - 1) * (width / 2),
      });
    }
    if (width > 728) {
      return setState({
        ...state,
        activeSlide: state.activeSlide - 1,
        translate: (state.activeSlide - 1) * 550,
      });
    }
    setState({
      ...state,
      activeSlide: state.activeSlide - 1,
      translate: (state.activeSlide - 1) * width,
    });
  };

  const next = () => {
    if (width > 1128) {
      return setState({
        ...state,
        activeSlide: state.activeSlide + 1,
        translate: (state.activeSlide + 1) * (width / 2),
      });
    }
    if (width > 728) {
      return setState({
        ...state,
        activeSlide: state.activeSlide + 1,
        translate: (state.activeSlide + 1) * 550,
      });
    }
    setState({
      ...state,
      activeSlide: state.activeSlide + 1,
      translate: (state.activeSlide + 1) * width,
    });
  };

  return (
    <div ref={containerRef}>
      <div
        className={[
          space["m-v--16"],
          layout["flex"],
          layout["items-center"],
          layout["justify-between"],
        ].join(" ")}
      >
        <div>
          <h2 className={[font["size--28"]].join(" ")}>{title}</h2>
        </div>
        <div className={[layout["flex"], layout["items-center"]].join(" ")}>
          <div className={[layout["flex"], layout["items-center"]].join(" ")}>
            <div className={[space["m-h--4"]].join(" ")}>
              <Button
                block
                variant="paginate"
                animate
                direction="left"
                onClick={previous}
                disable={state.activeSlide === 0}
              />
            </div>
            <div className={[space["m-h--4"]].join(" ")}>
              <Button
                block
                variant="paginate"
                animate
                direction="right"
                onClick={next}
                disable={
                  state.activeSlide === Math.ceil(temporaryCards.length / 2) - 1
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            ...collectionStyles(),
            transition: `transform ease-out ${state.transition}s`,
          }}
        >
          <div style={{ display: "flex" }}>
            {temporaryCards.map((card, index) => {
              return (
                <div key={index}>
                  <div style={{ ...cardStyles(), paddingRight: 10 }}>
                    <Card
                      variant="collection"
                      paddingTop={paddingTopStyles()}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
