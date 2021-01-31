/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Star } from "../../../public/svg/original";

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
    <div css={{ display: "flex" }}>
      <div>
        <Star height={14} />
      </div>
      <h3 css={{ paddingLeft: 4, color: "gray__2", fontSize: 14 }}>
        {ratings}
      </h3>
      <span
        css={{
          paddingLeft: 4,
          color: "gray__1",
          fontSize: 14,
          fontWeight: 100,
        }}
      >
        ({reviews})
      </span>
    </div>
  );
};
