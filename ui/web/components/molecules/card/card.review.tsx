import { useState } from "react";

/** styles **/
import space from "@styles/space.module.scss";
import layout from "@styles/layout.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import shape from "@styles/shape.module.scss";

/** Logic */
import { renderDescription } from "./logic/logic.review";

/**
 * Renders the review card component
 * @param {string} imgUrl - Image of the review card
 * @param {string} description - Description of the review card
 */
export const ReviewCard: React.FC<{
  imgUrl?: string;
  description?: string;
  commentedDate?: string;
  user?: string;
}> = ({
  imgUrl,
  user = "User",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  commentedDate = "Month, Year",
}) => {
  const [display, setDisplay] = useState(false);

  return (
    <div className={[space["p-v--12"]].join(" ")}>
      <div
        className={[
          layout["flex"],
          layout["items-center"],
          space["p-b--8"],
        ].join(" ")}
      >
        <div style={{ height: 55, width: 55, borderRadius: 9999 }}>
          {imgUrl ? (
            <img src={imgUrl} style={{ borderRadius: 9999 }} />
          ) : (
            <div
              className={[
                shape["w--full"],
                shape["h--full"],
                shape["br--circle"],
                color["bg--white__2"],
              ].join(" ")}
            />
          )}
        </div>
        <div
          className={[
            space["m-l--12"],
            space["p-b--8"],
            layout["flex"],
            layout["items-center"],
          ].join(" ")}
        >
          <div className={[layout["flex"], layout["flex-col"]].join(" ")}>
            <p className={[color["c--gray__3"]].join(" ")}>{user}</p>
            <p
              className={[
                font["size--14"],
                color["c--gray__1"],
                font["weight--300"],
              ].join(" ")}
            >
              {commentedDate}
            </p>
          </div>
        </div>
      </div>
      <div className={space["m-v--12"]}>
        {display || description.split(" ").length < 75 ? (
          <p className={[font["weight--100"], font["lh--15"]].join(" ")}>
            {description}
          </p>
        ) : (
          <p className={[font["weight--100"], font["lh--15"]].join(" ")}>
            {renderDescription(description)}
            <span
              className={[layout["inline-block"], space["m-l--6"]].join(" ")}
            >
              <div
                className={[color["bg--transparent"], font["size--16"]].join(
                  " "
                )}
                onClick={() => setDisplay(!display)}
              >
                <u>read more</u>
              </div>
            </span>
          </p>
        )}
      </div>
    </div>
  );
};
