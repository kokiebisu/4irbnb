import { useSlide } from "@hooks/useSlide";

import space from "@styles/space.module.scss";
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";

import { Button, $Button } from "@button";

import { Card, $Card } from "@card";

export const StartingTemplate = ({
  title = "Starting in the next 6 hours",
}) => {
  const temporaryCards = [
    {
      imgUrl:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1652939-media_library/original/a7f906fc-f4c8-4b27-a5e2-b783115350e4.jpeg?aki_policy=poster",
      videoUrl:
        "https://a0.muscache.com/v/6f/00/6f00cc13-2903-5153-b36d-07cc55e453b3/6f00cc1329035153b36d07cc55e453b3_600k_1.mp4?imformat=h265&imwidth=400",
    },
    {
      imgUrl:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1652939-media_library/original/a7f906fc-f4c8-4b27-a5e2-b783115350e4.jpeg?aki_policy=poster",
      videoUrl:
        "https://a0.muscache.com/v/6f/00/6f00cc13-2903-5153-b36d-07cc55e453b3/6f00cc1329035153b36d07cc55e453b3_600k_1.mp4?imformat=h265&imwidth=400",
    },
    {
      imgUrl:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1652939-media_library/original/a7f906fc-f4c8-4b27-a5e2-b783115350e4.jpeg?aki_policy=poster",
      videoUrl:
        "https://a0.muscache.com/v/6f/00/6f00cc13-2903-5153-b36d-07cc55e453b3/6f00cc1329035153b36d07cc55e453b3_600k_1.mp4?imformat=h265&imwidth=400",
    },
    {
      imgUrl:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1652939-media_library/original/a7f906fc-f4c8-4b27-a5e2-b783115350e4.jpeg?aki_policy=poster",
      videoUrl:
        "https://a0.muscache.com/v/6f/00/6f00cc13-2903-5153-b36d-07cc55e453b3/6f00cc1329035153b36d07cc55e453b3_600k_1.mp4?imformat=h265&imwidth=400",
    },
  ];

  const displayingColumns = () => {
    if (width > 1128) {
      return 3;
    }
    if (width > 700) {
      return 2;
    }
    return 1;
  };

  const { state, containerRef, width, previous, next } = useSlide("whole");

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
              variant={$Button.UNDERLINE}
              title={`Show (${temporaryCards.length})`}
            />
          </div>
          <div className={[layout["flex"], layout["items-center"]].join(" ")}>
            <div className={[space["m-h--4"]].join(" ")}>
              <Button
                block
                variant={$Button.PAGINATE}
                animate
                direction="left"
                onClick={previous}
                //   disable={state.activeSlide === 0}
              />
            </div>
            <div className={[space["m-h--4"]].join(" ")}>
              <Button
                block
                variant={$Button.PAGINATE}
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
            width: width * (temporaryCards.length / displayingColumns()),
            transform: `translateX(-${state.translate}px)`,
            transition: `transform ease-out ${state.transition}s`,
          }}
        >
          <div style={{ display: "flex" }}>
            {temporaryCards.map(
              ({ imgUrl = undefined, videoUrl = undefined }, index) => {
                return (
                  <div
                    key={index}
                    style={{ width: width / displayingColumns() }}
                  >
                    <div style={{ marginRight: 10 }}>
                      <Card
                        variant={$Card.STARTING}
                        imgUrl={imgUrl}
                        videoUrl={videoUrl}
                      />
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
