/** styles */
import layout from "@styles/layout.module.scss";
import staysDetail from "@styles/staysDetail.module.scss";
import color from "@styles/color.module.scss";
import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import section from "@section/section.module.scss";

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
export const PanelSection: React.FC<{
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
  images = layoutType === "room"
    ? [
        "https://a0.muscache.com/im/pictures/10cb30a8-c0f9-446b-850c-613846992b57.jpg?im_w=1200",
        "https://a0.muscache.com/im/pictures/cc0a12d5-8237-4188-98c9-6a60b3bae441.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/d99a699e-6d82-415b-a7e1-4b8ce0cd2124.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/0c6b48d8-5771-4dea-ab96-6474d6429673.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/7f7d232b-47ea-4c27-8878-d336e0014a62.jpg?im_w=720",
      ]
    : [
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1715106-poster/original/2c323f1c-3bb9-4a43-8087-c3f9f4f3ea20.jpg?im_w=480",
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1715106-active_media/original/fb488b57-a64f-4bdc-86f2-a3324937f2e3.jpg?im_w=480",
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1715106-active_media/original/7d50d37f-69c2-4410-943b-4937a6c36f2e.jpg?im_w=240",
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1715106-active_media/original/e209bc04-77ab-4a90-bf6b-e8a3880801da.jpg?im_w=240",
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1715106-active_media/original/0b0037b3-e4e2-4f66-9863-f549aae0e2e0.jpg?im_w=480",
      ],
}) => {
  const header = {
    room: (
      <div
        className={[
          space["m-v--8"],
          layout["items-center"],
          layout["justify-between"],
        ].join(" ")}
      >
        <div>
          <h3
            className={[
              color["c--gray__4"],
              font["size--28"],
              font["weight--500"],
            ].join(" ")}
          >
            {title}
          </h3>
          <div
            className={[layout["items-center"], layout["flex-wrap"]].join(" ")}
          >
            <div>
              <Star height={14} />
            </div>
            <span
              className={[
                space["p-l--4"],
                color["c--g__2"],
                font["size--14"],
              ].join(" ")}
            >
              {ratings}
            </span>
            <span
              className={[
                space["p-l--4"],
                color["c--gray__1"],
                font["size--14"],
                font["weight--300"],
              ].join(" ")}
            >
              ({numberOfReviews})
            </span>
            {superhost && (
              <>
                <span className={[color["c--gray__1"]].join(" ")}>
                  &nbsp;·&nbsp;
                </span>
                <div>
                  <Superhost height={14} fill="#E61E4D" />
                </div>
                <p
                  className={[
                    space["p-l--3"],
                    color["c--gray__1"],
                    font["size--14"],
                    font["weight--300"],
                  ].join(" ")}
                >
                  Superhost
                </p>
              </>
            )}
            <span
              className={[font["weight--300"], color["c--gray__1"]].join(" ")}
            >
              &nbsp;·&nbsp;
            </span>
            <a
              className={[font["size--14"], color["c--gray__1"]].join(" ")}
              href=""
            >
              <u>
                {location}, {province}, {country}
              </u>
            </a>
          </div>
        </div>
        <div className={[layout["flex"], section["hidden__options"]].join(" ")}>
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
    ),
    experience: (
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
            <u className={[font["size--14"], font["weight--100"]].join(" ")}>
              All online experiences
            </u>
          </div>
        </div>
        <div className={[layout["flex"], section["hidden__options"]].join(" ")}>
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
    ),
  };

  const panel = {
    room: (
      <div className={[section["container__panel"]].join(" ")}>
        <div className={[layout["flex"], shape["h--50p"]].join(" ")}>
          <div
            className={[
              section["br__panel"],
              section["b__panel"],
              shape["background-cover"],
              shape["background-repeat"],
              layout["relative"],
              layout["overflow-hidden"],
              section["w__panel--image"],
            ].join(" ")}
          >
            <img
              className={[
                shape["background-cover"],
                shape["background-repeat"],
              ].join(" ")}
              src={images[0]}
            />
          </div>
          <div
            className={[
              shape["w--50p"],
              layout["relative"],
              staysDetail["hidden__panel"],
            ].join(" ")}
          >
            <div
              className={[
                shape["w--full"],
                shape["h--full"],
                layout["flex"],
                layout["flex-wrap"],
              ].join(" ")}
            >
              <div
                style={{
                  borderRadius: 5,
                  borderLeft: "4px solid white",
                  borderRight: "4px solid white",
                  borderBottom: "4px solid white",
                }}
                className={[
                  shape["h--50p"],
                  layout["overflow-hidden"],
                  layout["relative"],
                  section["w__panel--image"],
                ].join(" ")}
              >
                <img
                  className={[
                    shape["background-cover"],
                    shape["background-repeat"],
                  ].join(" ")}
                  src={images[1]}
                />
              </div>
              <div
                style={{
                  borderLeft: "4px solid white",
                  borderBottom: "4px solid white",
                }}
                className={[
                  shape["btrr--15"],
                  shape["h--50p"],
                  layout["overflow-hidden"],
                  layout["relative"],
                  section["w__panel--image"],
                ].join(" ")}
              >
                <img
                  className={[
                    shape["background-cover"],
                    shape["background-repeat"],
                  ].join(" ")}
                  src={images[2]}
                />
              </div>
              <div
                style={{
                  borderLeft: "4px solid white",
                  borderTop: "4px solid white",
                  borderRight: "4px solid white",
                }}
                className={[
                  shape["h--50p"],
                  layout["overflow-hidden"],
                  layout["relative"],
                  section["w__panel--image"],
                ].join(" ")}
              >
                <img
                  className={[
                    shape["background-cover"],
                    shape["background-repeat"],
                  ].join(" ")}
                  src={images[3]}
                />
              </div>
              <div
                style={{
                  borderLeft: "4px solid white",
                  borderTop: "4px solid white",
                }}
                className={[
                  shape["bbrr--15"],
                  shape["h--50p"],
                  layout["overflow-hidden"],
                  layout["relative"],
                  section["w__panel--image"],
                ].join(" ")}
              >
                <img
                  className={[
                    shape["background-cover"],
                    shape["background-repeat"],
                  ].join(" ")}
                  src={images[4]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    experience: (
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
    ),
  };

  return (
    <>
      <div className={[space["p-v--15"]].join(" ")}>
        <div className={[layout["container"]].join(" ")}>
          {header[layoutType]}
        </div>
      </div>
      <div>{panel[layoutType]}</div>
    </>
  );
};
