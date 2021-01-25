import { Star } from "@svg/original";

import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";
import shape from "@styles/shape.module.scss";
import font from "@styles/font.module.scss";
import section from "@template/index.module.scss";

import { Button } from "@button";
import { Bullet, $Bullet } from "@bullet";
import { Card } from "@card";

import * as $button from "@button/variants";
import * as $card from "@card/variants";

/**
 * Renders the reviews section
 * @param {Object[]} categories - Aspects of the ratings
 * @param {Object[]} reviews - Reviews by the users
 * @param {number} ratings - The average ratings
 * @param {number} numberOfReviews - The total number of reviews
 * @param {string} layoutType - The type of layout
 */
export const ReviewsTemplate: React.FC<{
  ratings?: number;
  categories?: any;
  numberOfReviews?: number;
  reviews?: any;
  layoutType?: string;
}> = ({
  categories = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ],
  reviews = [undefined, undefined, undefined, undefined],
  ratings = 5.0,
  numberOfReviews = 100,
  layoutType = "room",
}) => {
  return (
    <>
      <div className={[space["m-v--8"]].join(" ")}>
        <div
          className={[
            space["p-v--8"],
            layout["flex"],
            layout["items-center"],
          ].join(" ")}
        >
          <div className={[layout["flex"], layout["items-center"]].join(" ")}>
            <div className={[space["m-r--6"]].join(" ")}>
              <Star width={20} />
            </div>
            <h3
              className={[
                space["m-r--6"],
                font["size--22"],
                color["c--gray__3"],
              ].join(" ")}
            >
              {ratings.toFixed(1)}
            </h3>
            <h3
              className={[
                space["m-l--2"],
                font["size--22"],
                color["c--gray__3"],
              ].join(" ")}
            >
              ({numberOfReviews} reviews)
            </h3>
          </div>
        </div>
        {layoutType === "room" && (
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}
            className={[space["m-t--12"], space["m-r--24"]].join(" ")}
          >
            {categories.map((category, index) => {
              return (
                <div
                  key={index}
                  className={[
                    section["m__review--bullet"],
                    space["p-v--8"],
                  ].join(" ")}
                >
                  <Bullet
                    variant={$Bullet.SCORE}
                    category={category?.type}
                    average={category?.average}
                  />
                </div>
              );
            })}
          </div>
        )}
        <div
          className={[
            shape["w-full"],
            space["m-t--16"],
            section["display__reviews--wrapper"],
          ].join(" ")}
        >
          {reviews.map((review, index) => {
            return (
              <div
                className={[section["m__review--card"]].join(" ")}
                key={index}
              >
                <Card
                  variant={$card.REVIEW}
                  imgUrl={review?.imgUrl}
                  description={review?.description}
                />
              </div>
            );
          })}
        </div>
        <div className={[space["m-t--16"]].join(" ")}>
          <Button
            variant={$button.BORDER}
            size="md"
            title={`Show all ${numberOfReviews} reviews`}
          />
        </div>
      </div>
    </>
  );
};
