import { useRef } from "react";
import Router from "next/router";

/** styles **/
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import banner from "@banner/banner.module.scss";
import responsive from "@styles/responsive.module.scss";

/** components */
import { Button } from "@button";
import { Card } from "@card/card.component";

/** hooks */
import { useSlider, SliderProps } from "@hooks/useSlider";

/**
 * Renders the homes banner
 * @param {Object[]} hosts - List of hosts
 */
export const CommunityTemplate: React.FC<{
  hosts?: {
    name: string;
    stayType: string;
    location: string;
    imgUrl: string;
  }[];
}> = ({
  hosts = [
    {
      name: "Darrel",
      stayType: "tiny house",
      location: "Atlanta",
      imgUrl:
        "https://a0.muscache.com/im/pictures/92acd468-73bf-4ca1-a956-277c4a94b3a3.jpg?im_q=highq&im_w=960",
    },
    {
      name: "Candida & Jeff",
      stayType: "House",
      location: "Joshua Tree",
      imgUrl:
        "https://a0.muscache.com/im/pictures/8a09fe60-64e5-4461-bb80-aaf8bc3238a7.jpg?im_q=highq&im_w=960",
    },
    {
      name: "Ryo",
      stayType: "farm stay",
      location: "Komatsu",
      imgUrl:
        "https://a0.muscache.com/im/pictures/d95dc425-2606-4727-9a2b-861709479fb9.jpg?im_q=highq&im_w=960",
    },
    {
      name: "Sophie",
      stayType: "loft",
      location: "Paris",
      imgUrl:
        "https://a0.muscache.com/im/pictures/17d27522-7f79-4a82-9225-74c737800641.jpg?im_q=highq&im_w=960",
    },
    {
      name: "Nancy",
      stayType: "private room",
      location: "San Francisco",
      imgUrl:
        "https://a0.muscache.com/im/pictures/e4ad8c8e-ccf9-473c-856b-0b3c5dfe0662.jpg?im_q=highq&im_w=960",
    },
  ],
}) => {
  const width = 366;
  const sliderRef = useRef(null);
  const { state, previousSlide, nextSlide }: SliderProps = useSlider(
    hosts,
    width,
    "banner"
  );

  return (
    <div
      className={[responsive["b_to_f--sm"], layout["items-center"]].join(" ")}
    >
      <div
        style={{ position: "relative", zIndex: 500 }}
        className={[banner["w__homes--left"]].join(" ")}
      >
        <div className={`${[responsive["p-l--24_to_64--sm"]].join(" ")} `}>
          <div
            style={{ maxWidth: 360, width: "100%" }}
            className={`${[
              layout["flex"],
              layout["flex-col"],
              layout["justify-center"],
            ].join(" ")} `}
          >
            <div className={[space["m-b--32"]].join(" ")}>
              <h1
                style={{ lineHeight: 1 }}
                className={[font["size--45"]].join(" ")}
              >
                Host your home on Airbnb
              </h1>
            </div>
            <div className={[space["m-b--32"]].join(" ")}>
              <h4 className={[font["size--18"], font["lh--15"]].join(" ")}>
                Join a vibrant community of hosts, create memorable experiences
                for travellers, and earn money to pursue the things you love.
              </h4>
            </div>
            <div className={[layout["inline-block"]].join(" ")}>
              <Button
                variant="primary"
                size="md"
                title="Get started"
                onClick={() => Router.push("/become-a-host")}
                animate
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ position: "relative", zIndex: 500 }}
        className={[
          banner["w__homes--right"],
          responsive["p-l--24_to_64--sm"],
          space["p-t--50"],
        ].join(" ")}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: 12,
            zIndex: 50,
          }}
        >
          <div
            style={{
              borderRadius: 12,
              transform: `translateX(-${state.translate}px)`,
              transition: `transform ease-out ${state.transition}s`,
              height: "100%",
              width: width * hosts.length,
              display: "flex",
            }}
          >
            {hosts.map(({ name, imgUrl, stayType, location }, index) => {
              return (
                <div
                  key={index}
                  ref={sliderRef}
                  className={[space["m-r--16"]].join(" ")}
                >
                  <Card
                    variant="host"
                    host={name}
                    imgUrl={imgUrl}
                    stayType={stayType}
                    location={location}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={[
            space["m-t--32"],
            space["m-r--32"],
            layout["flex"],
            responsive["justify--start_to_end--sm"],
          ].join(" ")}
        >
          <div className={[layout["items-center"], layout["flex"]].join(" ")}>
            <div className={[space["m-r--8"]].join(" ")}>
              <Button
                variant="paginate"
                animate
                direction="left"
                onClick={previousSlide}
              />
            </div>
            <div>
              <Button
                variant="paginate"
                animate
                direction="right"
                onClick={nextSlide}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
