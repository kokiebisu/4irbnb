/** styles **/
import layout from "@styles/layout.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";
import space from "@styles/space.module.scss";
import shape from "@styles/shape.module.scss";
import styles from "@card/card.module.scss";

/** vectors */
import { Heart, Star } from "@svg/original";

/**
 * Renders the vertical card component
 * @param {Object} card - Information about the card
 * @param {boolean} save - Whether if the card can be saved
 */
export const VerticalCard: React.FC<{
  imgUrl?: string;
  superhost?: boolean;
  ratings?: number;
  save?: boolean;
  number_of_reviews?: number;
  country?: string;
  title?: string;
  cost?: number;
}> = ({
  imgUrl,
  superhost,
  ratings = 5.0,
  number_of_reviews = 100,
  save,
  country = "Country",
  title = "Title",
  cost = 10,
}) => {
  return (
    <div className={[styles["w__vertical"]].join(" ")}>
      <div
        style={{ paddingTop: "135%" }}
        className={[layout["relative"]].join(" ")}
      >
        <div
          style={{ position: "absolute", top: 0, bottom: 0, right: 0, left: 0 }}
        >
          {imgUrl ? (
            <img className={[shape["br--12"]].join(" ")} src={imgUrl} />
          ) : (
            <div
              className={[shape["br--12"]].join(" ")}
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "lightgray",
              }}
            />
          )}
          <div
            className={[
              layout["flex"],
              space["p-v--8"],
              space["p-h--10"],
              layout["at--0"],
              layout["justify-between"],
              shape["w--full"],
            ].join(" ")}
          >
            <div
              className={
                superhost
                  ? [].join(" ")
                  : [color["c--white"], shape["hidden"]].join(" ")
              }
            >
              <div
                className={[
                  space["p-h--8"],
                  space["p-v--4"],
                  color["bg--white__1"],
                  shape["shadow--lg"],
                  shape["br--3"],
                ].join(" ")}
              >
                <p
                  className={[
                    font["size--12"],
                    font["uppercase"],
                    font["ls--3"],
                  ].join(" ")}
                >
                  Superhost
                </p>
              </div>
            </div>
            <div
              className={
                save
                  ? [color["c--white"]].join(" ")
                  : [color["c--white"], shape["hidden"]].join(" ")
              }
            >
              <Heart
                fill="rgba(0, 0, 0, 0.5)"
                width={24}
                stroke="rgb(255, 255, 255)"
                strokeWidth={2}
              />
            </div>
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
