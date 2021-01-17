import { Card } from "@card";
import { Button } from "@button";

import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import layout from "@styles/layout.module.scss";
import { useSlider } from "@hooks/useSlider";
import { useLayoutEffect, useRef, useState } from "react";

export const CardsTemplate: React.FC<{ title?: string }> = ({
  title = "Title here",
}) => {
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
  const temporaryCards = [
    {
      imgUrl:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1660225-poster/original/f3e703fc-8bee-475c-b415-5398e8846fcd.jpeg?aki_policy=poster",
      videoUrl:
        "https://a0.muscache.com/v/af/4b/af4b985a-da36-5dab-b48a-b56aacde99a2/af4b985ada365dabb48ab56aacde99a2_600k_1.mp4?imformat=h265&imwidth=400",
    },
    {
      imgUrl:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-poster/original/437c46e2-33d8-4b5c-a6a4-84d6642b2fcc.jpg?aki_policy=poster",
      videoUrl:
        "https://a0.muscache.com/v/a3/25/a325262c-0198-541d-a7eb-2c3440e67e5d/a325262c0198541da7eb2c3440e67e5d_600k_1.mp4?imformat=h265&imwidth=400",
    },
    {
      imgUrl:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1652939-media_library/original/a7f906fc-f4c8-4b27-a5e2-b783115350e4.jpeg?aki_policy=poster",
      videoUrl:
        "https://a0.muscache.com/v/6f/00/6f00cc13-2903-5153-b36d-07cc55e453b3/6f00cc1329035153b36d07cc55e453b3_600k_1.mp4?imformat=h265&imwidth=400",
    },
    {
      imgUrl:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1665391-media_library/original/4f6cddd2-fb02-4fa1-a1ee-3f04c51543ea.jpeg?aki_policy=poster",
      videoUrl:
        "https://a0.muscache.com/v/89/33/893320e5-4f3b-5fce-8da5-b2d9ca5ec782/893320e54f3b5fce8da5b2d9ca5ec782_600k_1.mp4?imformat=h265&imwidth=400",
    },
    {
      imgUrl:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1655017-poster/original/94483e4d-7493-46ad-bddc-d3780d2d59b2.jpg?aki_policy=poster",
      videoUrl:
        "https://a0.muscache.com/v/5a/ba/5abacffc-24fe-56ae-9af1-7e108b935ef3/5abacffc24fe56ae9af17e108b935ef3_600k_1.mp4?imformat=h265&imwidth=400",
    },
    {
      imgUrl:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1682332-media_library/original/54db70ca-c02e-4910-ab58-fc3ec3eb9e62.jpeg?aki_policy=poster",
      videoUrl:
        "https://a0.muscache.com/v/e4/fc/e4fc6b63-de00-5733-bd92-8c5b3b11fc1f/e4fc6b63de005733bd928c5b3b11fc1f_600k_1.mp4?imformat=h265&imwidth=400",
    },
    {
      imgUrl:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1660225-poster/original/f3e703fc-8bee-475c-b415-5398e8846fcd.jpeg?aki_policy=poster",
      videoUrl:
        "https://a0.muscache.com/v/af/4b/af4b985a-da36-5dab-b48a-b56aacde99a2/af4b985ada365dabb48ab56aacde99a2_600k_1.mp4?imformat=h265&imwidth=400",
    },
    {
      imgUrl:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-poster/original/437c46e2-33d8-4b5c-a6a4-84d6642b2fcc.jpg?aki_policy=poster",
      videoUrl:
        "https://a0.muscache.com/v/a3/25/a325262c-0198-541d-a7eb-2c3440e67e5d/a325262c0198541da7eb2c3440e67e5d_600k_1.mp4?imformat=h265&imwidth=400",
    },
    {
      imgUrl:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1652939-media_library/original/a7f906fc-f4c8-4b27-a5e2-b783115350e4.jpeg?aki_policy=poster",
      videoUrl:
        "https://a0.muscache.com/v/6f/00/6f00cc13-2903-5153-b36d-07cc55e453b3/6f00cc1329035153b36d07cc55e453b3_600k_1.mp4?imformat=h265&imwidth=400",
    },
    {
      imgUrl:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1665391-media_library/original/4f6cddd2-fb02-4fa1-a1ee-3f04c51543ea.jpeg?aki_policy=poster",
      videoUrl:
        "https://a0.muscache.com/v/89/33/893320e5-4f3b-5fce-8da5-b2d9ca5ec782/893320e54f3b5fce8da5b2d9ca5ec782_600k_1.mp4?imformat=h265&imwidth=400",
    },
    {
      imgUrl:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1655017-poster/original/94483e4d-7493-46ad-bddc-d3780d2d59b2.jpg?aki_policy=poster",
      videoUrl:
        "https://a0.muscache.com/v/5a/ba/5abacffc-24fe-56ae-9af1-7e108b935ef3/5abacffc24fe56ae9af17e108b935ef3_600k_1.mp4?imformat=h265&imwidth=400",
    },
    {
      imgUrl:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1682332-media_library/original/54db70ca-c02e-4910-ab58-fc3ec3eb9e62.jpeg?aki_policy=poster",
      videoUrl:
        "https://a0.muscache.com/v/e4/fc/e4fc6b63-de00-5733-bd92-8c5b3b11fc1f/e4fc6b63de005733bd928c5b3b11fc1f_600k_1.mp4?imformat=h265&imwidth=400",
    },
  ];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: 0,
    transition: 0.7,
  });

  const evaluateColumns = () => {
    if (width > 1128) {
      return 6;
    } else if (width > 1028) {
      return 5;
    } else if (width > 728) {
      return 4;
    } else if (width > 500) {
      return 3;
    } else {
      return 2;
    }
  };

  const displayingColumns = evaluateColumns();

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
    <div ref={containerRef} style={{ overflowX: "hidden" }}>
      <div
        className={[
          space["m-v--16"],
          layout["flex"],
          layout["items-center"],
          layout["justify-between"],
        ].join(" ")}
      >
        <div>
          <h3 className={[font["size--20"]].join(" ")}>{title}</h3>
        </div>
        <div className={[layout["flex"], layout["items-center"]].join(" ")}>
          <div className={[space["m-r--8"]].join(" ")}>
            <Button
              variant="underline"
              title={`Show (${temporaryCards.length})`}
            />
          </div>
          <div className={[layout["flex"], layout["items-center"]].join(" ")}>
            <div className={[space["m-h--4"]].join(" ")}>
              <Button
                block
                variant="paginate"
                animate
                direction="left"
                onClick={previous}
                //   disable={state.activeSlide === 0}
              />
            </div>
            <div className={[space["m-h--4"]].join(" ")}>
              <Button
                block
                variant="paginate"
                animate
                direction="right"
                onClick={next}
                //   disable={
                //     state.activeSlide ===
                //     Math.ceil(availables.length / displayingColumns) - 1
                //   }
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
            width: width * (temporaryCards.length / displayingColumns),
            transform: `translateX(-${state.translate}px)`,
            transition: `transform ease-out ${state.transition}s`,
          }}
        >
          <div style={{ display: "flex" }}>
            {temporaryCards.map(({ imgUrl, videoUrl }, index) => {
              return (
                <div key={index} style={{ width: width / displayingColumns }}>
                  <div style={{ marginRight: 10 }}>
                    <Card variant="video" imgUrl={imgUrl} videoUrl={videoUrl} />
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
