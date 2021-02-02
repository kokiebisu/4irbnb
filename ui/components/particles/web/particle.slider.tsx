/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useLayoutEffect, useState, useRef } from "react";
import { Button, $Button } from "../../atoms/button/web";
import { renderSize } from "molecules/card/logic/logic.nearby";

const Dots = ({ slides, activeSlide }) => {
  return (
    <div
      css={{
        position: "absolute",
        bottom: 25,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {slides.map((_, index: number) => (
        <span
          key={index}
          css={{
            transition: "all 0.2s ease-in",
            padding: 3,
            marginRight: 5,
            cursor: "pointer",
            borderRadius: "50%",
            background: `${activeSlide === index ? "white" : "lightgray"}`,
          }}
        />
      ))}
    </div>
  );
};

const Slide = ({ slide }) => {
  return (
    <div
      css={{
        height: "100%",
        width: "100%",
        backgroundImage: slide && `url(${slide})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      sx={{
        ...(!slide && { bg: "gray__0" }),
      }}
    />
  );
};

export const SliderParticle: React.FC<{ slides?: any }> = ({
  slides = [undefined, undefined, undefined],
}) => {
  const [style, setStyle] = useState({
    opacity: 0,
  });
  const [width, setWidth] = useState(1000);
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
  });

  const containerRef = useRef<any>();

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

  const previousSlide = () => {
    if (state.activeSlide === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * width,
        activeSlide: slides.length - 1,
      });
    }

    setState({
      ...state,
      activeSlide: state.activeSlide - 1,
      translate: (state.activeSlide - 1) * width,
    });
  };

  const nextSlide = () => {
    if (state.activeSlide === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeSlide: 0,
      });
    }
    setState({
      ...state,
      activeSlide: state.activeSlide + 1,
      translate: (state.activeSlide + 1) * width,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() =>
        setStyle({
          opacity: 1,
        })
      }
      onMouseLeave={() =>
        setStyle({
          opacity: 0,
        })
      }
      css={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 12,
        zIndex: 50,
      }}
    >
      <div
        css={{
          borderRadius: 12,
          transform: `translateX(-${state.translate}px)`,
          transition: `transform ease-out ${state.transition}s`,
          height: "100%",
          width: width * slides.length,
          display: "flex",
        }}
      >
        {slides.map((slide, index) => {
          return <Slide key={index} slide={slide} />;
        })}
      </div>
      <div
        css={{
          ...style,
          transition: "opacity 0.2s ease-out",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: 10,
          zIndex: 60,
        }}
      >
        <Button
          variant={$Button.PAGINATE}
          animate
          direction="left"
          onClick={previousSlide}
        />
      </div>
      <div
        css={{
          ...style,
          transition: "opacity 0.2s ease-out",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: 10,
          zIndex: 60,
        }}
      >
        <Button
          variant={$Button.PAGINATE}
          animate
          direction="right"
          onClick={nextSlide}
        />
      </div>

      <div css={{ ...style, transition: "opacity 0.2s ease-out" }}>
        <Dots slides={slides} activeSlide={state.activeSlide} />
      </div>
    </div>
  );
};
