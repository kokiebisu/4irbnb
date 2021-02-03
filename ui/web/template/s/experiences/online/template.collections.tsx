/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Button, $Button, Card, $Card } from "@airbnb/components/web";

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
        css={{
          margin: "16px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2 css={{ fontSize: 28 }}>{title}</h2>
        </div>
        <div
          css={{
            display: "flex",
            alignIetms: "center",
          }}
        >
          <div
            css={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              css={{
                margin: "0 4px",
              }}
            >
              <Button
                block
                variant={$Button.PAGINATE}
                animate
                direction="left"
                onClick={previous}
                disable={state.activeSlide === 0}
              />
            </div>
            <div
              css={{
                margin: "0 4px",
              }}
            >
              <Button
                block
                variant={$Button.PAGINATE}
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
        css={{
          height: "100%",
          width: "100%",
        }}
      >
        <div
          css={{
            ...collectionStyles(),
            transition: `transform ease-out ${state.transition}s`,
          }}
        >
          <div css={{ display: "flex" }}>
            {temporaryCards.map((card, index) => {
              return (
                <div key={index}>
                  <div css={{ ...cardStyles(), paddingRight: 10 }}>
                    <Card
                      variant={$Card.COLLECTION}
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
