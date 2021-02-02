/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Button, $Button } from "@button/web";
import { Star } from "@svg/original";

/**
 * Renders the modal which gives all the available options
 * @param {number} ratings - Average ratings from the users
 * @param {number} reviews - Total number of reviews from the users
 */
export const AvailabilityBar: React.FC<{
  ratings?: number;
  reviews?: number;
}> = ({ ratings = 4.99, reviews = 271 }) => {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      sx={{
        borderTop: "1px solid",
        borderColor: "white__2",
      }}
    >
      <div css={{ padding: "16px 0" }}>
        <p>Add dates for prices</p>
        <div css={{ display: "flex", alignItems: "center" }}>
          <div>
            <Star width={12} />
          </div>
          <div>
            <span
              css={{ display: "inline-block", fontSize: 12, marginLeft: 4 }}
            >
              {ratings}
            </span>
            <span
              css={{ display: "inline-block", fontSize: 12, marginLeft: 4 }}
              sx={{ color: "white__3" }}
            >
              ({reviews})
            </span>
          </div>
        </div>
      </div>
      <div>
        <Button variant={$Button.PRIMARY} title="Check availability" />
      </div>
    </div>
  );
};
