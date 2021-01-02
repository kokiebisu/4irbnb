/** styles */
import layout from "@styles/layout.module.scss";
import staysDetail from "@styles/staysDetail.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import section from "@template/index.module.scss";

/** vectors */
import { Heart, Star, Share, Superhost } from "@svg/original";

/**
 * Renders the panel section
 * @param {string} title - Title of the section
 * @param {number} ratings - Rating of the room/experience
 * @param {number} numberOfReviews - Number of reviews for the room/experience
 * @param {boolean} superhost - Whether if the host is superhost or not
 * @param {string} location - Location of the room/experience
 * @param {string} province - Province of the room/experience
 * @param {string} country - Country of the room/experience
 * @param {string} layoutType - Type of layout
 * @param {string[]} images - Images for the panel
 */
export const PanelTemplate: React.FC<{
  title?: string;
  ratings?: number;
  numberOfReviews?: number;
  superhost?: boolean;
  location?: string;
  province?: string;
  country?: string;
  layoutType?: string;
  images?: string[];
}> = ({
  title = "Title here",
  ratings = 5.0,
  numberOfReviews = 100,
  superhost = false,
  location = "City",
  province = "Province",
  country = "Country",
  layoutType = "room",
  images = [
    "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1715106-poster/original/2c323f1c-3bb9-4a43-8087-c3f9f4f3ea20.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1715106-active_media/original/fb488b57-a64f-4bdc-86f2-a3324937f2e3.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1715106-active_media/original/7d50d37f-69c2-4410-943b-4937a6c36f2e.jpg?im_w=240",
    "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1715106-active_media/original/e209bc04-77ab-4a90-bf6b-e8a3880801da.jpg?im_w=240",
    "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1715106-active_media/original/0b0037b3-e4e2-4f66-9863-f549aae0e2e0.jpg?im_w=480",
  ],
}) => {
  return (
    <>
      <div className={[space["p-v--15"]].join(" ")}>
        <div className={[layout["container"]].join(" ")}>
          <div
            style={{ position: "relative", zIndex: 500 }}
            className={[
              space["m-v--8"],
              layout["items-center"],
              layout["justify-between"],
            ].join(" ")}
          >
            <div>
              <div>
                <u
                  className={[font["size--14"], font["weight--100"]].join(" ")}
                >
                  All online experiences
                </u>
              </div>
            </div>
            <div
              className={[layout["flex"], section["hidden__options"]].join(" ")}
            >
              <div
                className={[
                  space["p-r--6"],
                  layout["flex"],
                  layout["items-center"],
                ].join(" ")}
              >
                <a
                  href="#"
                  className={[
                    layout["flex"],
                    space["p-l--6"],
                    layout["items-center"],
                  ].join(" ")}
                >
                  <div>
                    <Share height={14} fill="#484848" />
                  </div>
                  <p
                    className={[
                      space["p-l--10"],
                      font["size--14"],
                      color["c--gray__2"],
                    ].join(" ")}
                  >
                    <u>Share</u>
                  </p>
                </a>
                <a
                  className={[
                    layout["flex"],
                    space["m-l--12"],
                    layout["items-center"],
                  ].join(" ")}
                >
                  <div>
                    <Heart fill="#484848" height={17} />
                  </div>
                  <u
                    className={[
                      space["p-l--10"],
                      font["size--14"],
                      color["c--gray__2"],
                    ].join(" ")}
                  >
                    Save
                  </u>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <div className={[section["container__panel"]].join(" ")}>
          <div style={{ maxWidth: 1280, width: "100%", margin: "0 auto" }}>
            <div
              style={{
                paddingTop: "38%",
                height: 0,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0,
                }}
              >
                <div className={[section["grid__panel"]].join(" ")}>
                  <div
                    style={{
                      backgroundSize: "cover",
                      backgroundImage: `url(${images[0]})`,
                    }}
                  ></div>
                  <div className={[section["grid__panel--middle"]].join(" ")}>
                    <div
                      style={{
                        backgroundSize: "cover",
                        backgroundImage: `url(${images[1]})`,
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundSize: "cover",
                        backgroundImage: `url(${images[2]})`,
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundSize: "cover",
                        backgroundImage: `url(${images[3]})`,
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      backgroundSize: "cover",
                      backgroundImage: `url(${images[4]})`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
