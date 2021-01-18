import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";

import { Heart, Star } from "@svg/original";
import React, { useState } from "react";

import { Video } from "@video";

/**
 * Renders the vertical card component
 * @param {Object} card - Information about the card
 * @param {boolean} save - Whether if the card can be saved
 */
export const VideoCard: React.FC<{
  imgUrl?: string;
  videoUrl?: string;
  superhost?: boolean;
  ratings?: number;
  save?: boolean;
  number_of_reviews?: number;
  country?: string;
  title?: string;
  cost?: number;
}> = ({
  imgUrl = "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1652939-media_library/original/a7f906fc-f4c8-4b27-a5e2-b783115350e4.jpeg?aki_policy=poster",
  videoUrl = "https://a0.muscache.com/v/6f/00/6f00cc13-2903-5153-b36d-07cc55e453b3/6f00cc1329035153b36d07cc55e453b3_600k_1.mp4?imformat=h265&imwidth=400",
  ratings = 5.0,
  number_of_reviews = 100,
  country = "Country",
  title = "Title",
  cost = 10,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        style={{ paddingTop: "133%" }}
        className={[layout["relative"]].join(" ")}
      >
        <div
          style={{ position: "absolute", top: 0, bottom: 0, right: 0, left: 0 }}
        >
          <div
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 40,
              pointerEvents: "none",
            }}
          >
            <Heart
              fill="rgba(0, 0, 0, 0.5)"
              width={24}
              stroke="rgb(255, 255, 255)"
              strokeWidth={2}
            />
          </div>
          <div style={{ height: "100%", width: "100%" }}>
            {isHovered && <Video videoUrl={videoUrl} />}
            <img
              height="100%"
              style={{
                borderRadius: 10,
                cursor: "pointer",
                objectFit: "cover",
              }}
              src={imgUrl}
            />
          </div>
        </div>
      </div>

      <div
        className={[
          space["m-t--4"],
          layout["flex"],
          layout["items-center"],
        ].join(" ")}
      >
        <div className={[space["m-r--3"]].join(" ")}>
          <Star width={15} />
        </div>
        <div className={[space["m-r--3"]].join(" ")}>
          <p className={[font["weight--100"], font["size--13"]].join(" ")}>
            {ratings}
          </p>
        </div>
        <div>
          <p
            className={[
              font["weight--100"],
              font["size--13"],
              color["c--gray__0"],
            ].join(" ")}
          >{`(${number_of_reviews})`}</p>
        </div>
        <div>
          <p className={[color["c--gray__0"]].join(" ")}>&nbsp; · &nbsp; </p>
        </div>
        <div>
          <p
            className={[
              font["size--13"],
              font["weight--100"],
              color["c--gray__0"],
            ].join(" ")}
          >
            {country}
          </p>
        </div>
      </div>
      <div>
        <p
          className={[
            font["ls--4"],
            font["weight--100"],
            font["size--15"],
            color["c--gray__4"],
          ].join(" ")}
        >
          {title}
        </p>
      </div>
      <div>
        <p className={[font["weight--100"]].join(" ")}>
          <span className={[font["weight--500"]].join(" ")}>From ${cost}</span>
          /person
        </p>
      </div>
    </div>
  );
};
