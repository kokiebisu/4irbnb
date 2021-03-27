/** vectors */
import { Star } from "@svg/original";

/** styles **/
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";
import font from "@styles/font.module.scss";
import color from "@styles/color.module.scss";

/**
 * Renders the rating bullet
 * @param {number} ratings - Average ratings from users
 * @param {number} reviews - Total number of reviews
 */
export const RatingBullet: React.FC<{
  ratings?: number;
  reviews?: number;
}> = ({ ratings = 5, reviews = 100 }) => {
  return (
    <div className={[layout["flex"], layout["flex"]].join(" ")}>
      <div>
        <Star height={14} />
      </div>
      <h3
        className={[space["p-l--4"], color["c--g__2"], font["size--14"]].join(
          " "
        )}
      >
        {ratings}
      </h3>
      <span
        className={[
          space["p-l--4"],
          color["c--gray__1"],
          font["size--14"],
          font["weight--100"],
        ].join(" ")}
      >
        ({reviews})
      </span>
    </div>
  );
};
