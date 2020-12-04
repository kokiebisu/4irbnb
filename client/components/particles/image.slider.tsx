import { Button } from "../../components/atoms/button/button.component";
import React, { useEffect, useLayoutEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import particle from "./particle.module.scss";

const Dots = ({ slides, activeSlide }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 25,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {slides.map((_, index) => (
        <span
          key={index}
          style={{
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
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: `url(${slide})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
};

export const ImageSlider = ({ slides }) => {
  const [style, setStyle] = useState({
    opacity: 0,
  });
  const [width, setWidth] = useState(1000);
  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.45,
  });

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
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 12,
        zIndex: 500,
      }}
    >
      <div
        style={{
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
        style={{
          ...style,
          transition: "opacity 0.2s ease-out",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: 10,
          zIndex: 9999,
        }}
      >
        <Button
          type="paginate"
          animate
          direction="left"
          onPress={previousSlide}
        />
      </div>
      <div
        style={{
          ...style,
          transition: "opacity 0.2s ease-out",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: 10,
          zIndex: 9999,
        }}
      >
        <Button type="paginate" animate direction="right" onPress={nextSlide} />
      </div>

      <div
        style={{ ...style, transition: "opacity 0.2s ease-out" }}
        className={[particle["dots"]].join(" ")}
      >
        <Dots slides={slides} activeSlide={state.activeSlide} />
      </div>
    </div>
  );
};
