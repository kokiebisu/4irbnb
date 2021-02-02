/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useLayoutEffect, useRef, useState } from "react";
import { Card, $Card } from "@card/web";
import { Button, $Button } from "@button/web";

/**
 * Renders the available section
 * @param {Object[]} availables - List of available dates for the experience
 */
export const AvailableTemplate: React.FC<{
  availables?: any;
}> = ({
  availables = [
    {
      date: "Tue., Nov. 10",
      from: "1:00 a.m. ",
      to: "3:00 a.m. ",
      standard: "PST",
      price: 31,
    },
    {
      date: "Tue., Nov. 10",
      from: "1:00 a.m. ",
      to: "3:00 a.m. ",
      standard: "PST",
      price: 31,
    },
    {
      date: "Tue., Nov. 11",
      from: "1:00 a.m. ",
      to: "3:00 a.m. ",
      standard: "PST",
      price: 31,
    },
    {
      date: "Tue., Nov. 12",
      from: "1:00 a.m. ",
      to: "3:00 a.m. ",
      standard: "PST",
      price: 31,
    },
    {
      date: "Tue., Nov. 13",
      from: "1:00 a.m. ",
      to: "3:00 a.m. ",
      standard: "PST",
      price: 31,
    },
  ],
}) => {
  const [width, setWidth] = useState(500);
  const containerRef = useRef<HTMLDivElement>();
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
  });

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

  useLayoutEffect(() => {
    window.addEventListener("resize", handleRef);
    handleRef();
    return () => {
      window.removeEventListener("resize", handleRef);
    };
  });

  const previous = () => {
    setState({
      ...state,
      activeSlide: state.activeSlide - 1,
      translate: (state.activeSlide - 1) * width,
    });
  };

  const next = () => {
    setState({
      ...state,
      activeSlide: state.activeSlide + 1,
      translate: (state.activeSlide + 1) * width,
    });
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        ref={containerRef}
      >
        <div css={{ margin: "16px 0" }}>
          <h3 css={{ fontSize: 20 }}>Choose from available dates</h3>
        </div>
        <div css={{ display: "flex", alignItems: "center" }}>
          <div css={{ margin: "0 4px " }}>
            <Button
              variant={$Button.PAGINATE}
              animate
              direction="left"
              onClick={previous}
              disable={state.activeSlide === 0}
            />
          </div>
          <div css={{ margin: "0 4px" }}>
            <Button
              variant={$Button.PAGINATE}
              animate
              direction="right"
              onClick={next}
              disable={
                state.activeSlide ===
                Math.ceil(availables.length / displayingColumns) - 1
              }
            />
          </div>
        </div>
      </div>
      <div
        style={{
          height: "100%",
          width: width * (availables.length / displayingColumns),
          transform: `translateX(-${state.translate}px)`,
          transition: `transform ease-out ${state.transition}s`,
        }}
      >
        <div style={{ display: "flex" }}>
          {availables.map((available, index) => {
            return (
              <div
                style={{ width: width / displayingColumns }}
                key={index}
                css={{
                  width: ["400px", "400px", "auto"],
                }}
              >
                <div css={{ marginBottom: 10, marginRight: 16 }}>
                  <Card
                    variant={$Card.AVAILABLE}
                    date={available.date}
                    from={available.from}
                    to={available.to}
                    standard={available.standard}
                    price={available.price}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div css={{ marginTop: 32 }}>
        <Button variant={$Button.BORDER} title="See more dates" />
      </div>
    </div>
  );
};
