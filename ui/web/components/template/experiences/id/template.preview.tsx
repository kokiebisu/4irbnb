/** styles */
import layout from "@styles/layout.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";
import section from "@template/index.module.scss";

/** vectors */
import { Heart, Share } from "@svg/original";

/** components */
import { Panel } from "@panel";

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
export const PreviewTemplate: React.FC<{
  title?: string;
  ratings?: number;
  numberOfReviews?: number;
  superhost?: boolean;
  location?: string;
  province?: string;
  country?: string;
  layoutType?: string;
  images?: string[];
}> = ({ images = [] }) => {
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
        <div className={[section["container__panel"]].join(" ")}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <Panel images={images} variant="experience" />
          </div>
        </div>
      </div>
    </>
  );
};
