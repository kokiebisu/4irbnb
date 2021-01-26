import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import shape from "@styles/shape.module.scss";

import { Bullet, $Bullet } from "@bullet";

import { DevicesInverse, Star } from "@svg/original";

import section from "@template/index.module.scss";

/**
 * Renders the characteristics of the room/experience
 * @param {string} title - Title of the room/experience
 * @param {string} stayType - Type of stay
 * @param {string} host - Name of the host
 * @param {number} guests - Number of guests
 * @param {number} bedrooms - Number of bedrooms
 * @param {number} beds - Number of beds
 * @param {string} hostImgUrl - Image of the host
 * @param {string} layoutType - Type of page it should display
 * @param {number} ratings - Ratings for the room/experience
 * @param {number} numberOfReviews - Number of reviews received
 * @param {string} location - Location of the room/experience
 * @param {string} country - Country of the room/experience
 * @param {Object} characteristics - The characteristics of the room/experience
 */
export const CharacteristicsTemplate: React.FC<{
  title?: string;
  stayType?: string;
  host?: string;
  guests?: number;
  bedrooms?: number;
  beds?: number;
  bathrooms?: number;
  hostImgUrl?: string;
  layoutType?: string;
  ratings?: number;
  numberOfReviews?: number;
  location?: string;
  country?: string;
  characteristics?: string[];
}> = ({
  title = "Making & Eating Soup Dumplings vegan Ok",
  stayType = "Tiny house",
  host = "Host",
  guests = 1,
  bedrooms = 1,
  beds = 1,
  bathrooms = 1,
  hostImgUrl = "https://a0.muscache.com/im/pictures/user/ca3ae8e3-997b-4ec6-b3af-139dd46be44b.jpg?im_w=240",
  layoutType = "experience",
  ratings = 4.9,
  numberOfReviews = 100,
  location = "Shanghai",
  country = "China",
  characteristics = {
    time: 75,
    devices: ["computer", "phone", "tablet"],
    people: 10,
    private: 100,
    languages: ["English"],
  },
}) => {
  return (
    <div>
      <div
        className={[
          layout["flex"],
          layout["items-center"],
          layout["justify-between"],
          space["m-t--4"],
        ].join(" ")}
      >
        <div
          className={[layout["flex"], space["p-v--8"]].join(" ")}
          style={{ width: "75%" }}
        >
          <div
            className={[
              layout["flex"],
              space["m-t--8"],
              layout["justify-center"],
            ].join(" ")}
          >
            <div className={[layout["flex"], layout["flex-col"]].join(" ")}>
              <div
                className={[layout["flex"], layout["items-center"]].join(" ")}
              >
                <div className={[space["m-r--4"]].join(" ")}>
                  <DevicesInverse width={16} fill="black" />
                </div>
                <div>
                  <h3 className={[font["size--12"]].join(" ")}>
                    ONLINE EXPERIENCE
                  </h3>
                </div>
              </div>
              <div className={[space["m-v--8"]].join(" ")}>
                <h3 className={[font["size--24"]].join(" ")}>{title}</h3>
              </div>
              <div
                className={[
                  layout["flex"],
                  layout["items-center"],
                  layout["flex-wrap"],
                ].join(" ")}
              >
                <div>
                  <Star height={14} />
                </div>
                <h3
                  className={[
                    space["p-l--4"],
                    color["c--g__2"],
                    font["size--14"],
                  ].join(" ")}
                >
                  {ratings.toFixed(1)}
                </h3>
                <p
                  className={[
                    space["p-l--4"],
                    color["c--gray__3"],
                    font["size--14"],
                  ].join(" ")}
                >
                  ({numberOfReviews})
                </p>
                <span
                  className={[font["weight--300"], color["c--gray__1"]].join(
                    " "
                  )}
                >
                  &nbsp;·&nbsp;
                </span>
                <a
                  className={[font["size--14"], color["c--gray__3"]].join(" ")}
                  href=""
                >
                  <u>
                    {location}, {country}
                  </u>
                </a>
                <span
                  className={[font["weight--300"], color["c--gray__1"]].join(
                    " "
                  )}
                >
                  &nbsp;·&nbsp;
                </span>
                <a
                  className={[
                    font["weight--300"],
                    font["size--14"],
                    color["c--gray__3"],
                  ].join(" ")}
                  href=""
                >
                  Part of &nbsp;
                  <u className={[font["weight--500"]].join(" ")}>
                    Airbnb Online Experiences
                  </u>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={[layout["flex"], layout["justify-end"]].join(" ")}>
          <img
            style={{ objectFit: "cover" }}
            className={[
              shape["br--circle"],
              shape["h--60"],
              shape["w--60"],
            ].join(" ")}
            src={hostImgUrl}
          />
        </div>
      </div>
      <div className={[space["m-v--12"], color["b-t--white__2"]].join(" ")}>
        <div className={[space["m-t--45"]].join(" ")}>
          <h3 className={[font["size--22"]].join(" ")}>
            Online experience hosted by {host}
          </h3>
        </div>
        <div
          className={[
            section["display__characteristics"],
            space["p-v--4"],
          ].join(" ")}
        >
          <Bullet
            extendsTo={[space["m-t--24"]].join(" ")}
            variant={$Bullet.CHARACTERISTIC}
            characteristic="time"
            time={characteristics["time"]}
          />
          <Bullet
            extendsTo={[space["m-t--24"]].join(" ")}
            variant={$Bullet.CHARACTERISTIC}
            characteristic="devices"
            devices={characteristics["devices"].join(", ")}
          />
          <Bullet
            extendsTo={[space["m-t--24"]].join(" ")}
            variant={$Bullet.CHARACTERISTIC}
            characteristic="people"
            people={characteristics["people"]}
            private={characteristics["group"]}
          />
          <Bullet
            extendsTo={[space["m-t--24"]].join(" ")}
            variant={$Bullet.CHARACTERISTIC}
            characteristic="language"
            languages={characteristics["languages"].join(", ")}
          />
        </div>
      </div>
    </div>
  );
};
