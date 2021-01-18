import color from "@styles/color.module.scss";
import shape from "@styles/shape.module.scss";
import space from "@styles/space.module.scss";
import layout from "@styles/layout.module.scss";
import React, { useState } from "react";
import { Video } from "@video";
import { Heart, Star } from "@svg/original";
import font from "@styles/font.module.scss";

export const StartingCard: React.FC<{
  ratings?: number;
  reviews?: number;
  country?: string;
  title?: string;
  minCost?: number;
  slots?: string[];
  imgUrl?: string;
  videoUrl?: string;
}> = ({
  ratings = 5,
  reviews = 100,
  country = "Italy",
  title = "Title",
  minCost = 56,
  slots = ["11:30", "3:30"],
  imgUrl = "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1652939-media_library/original/a7f906fc-f4c8-4b27-a5e2-b783115350e4.jpeg?aki_policy=poster",
  videoUrl = "https://a0.muscache.com/v/6f/00/6f00cc13-2903-5153-b36d-07cc55e453b3/6f00cc1329035153b36d07cc55e453b3_600k_1.mp4?imformat=h265&imwidth=400",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{ cursor: "pointer" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={[color["b--white__2"], shape["br--8"], space["p--12"]].join(
        " "
      )}
    >
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: "130px 1fr 20px",
        }}
      >
        <div className={[space["m-r--12"]].join(" ")}>
          <div style={{ paddingTop: "130%", position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
            >
              <div
                style={{ height: "100%", width: "100%", position: "relative" }}
              >
                {isHovered && <Video videoUrl={videoUrl} />}
                <img
                  height="100%"
                  src={imgUrl}
                  style={{ borderRadius: 8, objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            className={[
              layout["flex"],
              layout["items-center"],
              space["m-b--8"],
            ].join(" ")}
          >
            <div className={[space["m-r--3"]].join(" ")}>
              <Star width={10} height={10} />
            </div>
            <div className={[space["m-r--3"]].join(" ")}>
              <p className={[font["size--12"]].join(" ")}>{ratings}</p>
            </div>
            <div>
              <p className={[color["c--gray__0"], font["size--12"]].join(" ")}>
                ({reviews})
              </p>
            </div>
            <div className={[space["m-r--3"]].join(" ")}>
              <p className={[color["c--gray__0"], font["size--12"]].join(" ")}>
                &nbsp;·&nbsp;{country}
              </p>
            </div>
          </div>
          <div className={[space["m-b--6"]].join(" ")}>
            <h4 className={[font["size--14"]].join(" ")}>{title}</h4>
          </div>
          <div className={[space["m-b--10"]].join(" ")}>
            <h3 className={[font["size--14"]].join(" ")}>
              ${minCost}
              <span>/person</span>
            </h3>
          </div>
          <div className={[layout["flex"]].join(" ")}>
            {slots.map((slot, index) => {
              return (
                <div key={index} className={[space["m-r--6"]].join(" ")}>
                  <div
                    className={[
                      color["b--gray__3"],
                      shape["br--6"],
                      space["p-h--10"],
                      space["p-v--6"],
                    ].join(" ")}
                  >
                    <h3 className={[font["size--12"]].join(" ")}>{slot}p.m.</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Heart width={20} height={20} />
        </div>
      </div>
    </div>
  );
};
