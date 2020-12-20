import React from "react";

/** vectors */
import { Star } from "@svg/original";

/** styles **/
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";
import shape from "@styles/shape.module.scss";
import font from "@styles/font.module.scss";
import section from "@section/section.module.scss";

/** components */
import { Button } from "@button/button.component";
import { Bullet } from "@bullet/bullet.component";
import { Card } from "@card/card.component";

/** stories */
import { border } from "@button/button.stories";

/**
 * Renders the reviews section
 * @param {Object[]} categories - Aspects of the ratings
 * @param {Object[]} reviews - Reviews by the users
 * @param {number} ratings - The average ratings
 * @param {number} numberOfReviews - The total number of reviews
 * @param {string} layoutType - The type of layout
 */
export const ReviewsSection: React.FC<{
  ratings?: number;
  categories?: any;
  numberOfReviews?: number;
  reviews?: any;
  layoutType?: string;
}> = ({
  categories = [
    { type: "Cleanliness", average: 5.0 },
    { type: "Accuracy", average: 4.3 },
    { type: "Communication", average: 4.4 },
    { type: "Location", average: 4.8 },
    { type: "Check-in", average: 4.9 },
    {
      type: "Value",
      average: 4.9,
    },
  ],
  reviews = [
    {
      imgUrl:
        "https://a0.muscache.com/im/pictures/user/04d3499b-6cca-4d1a-acc4-1fc4444e1002.jpg?im_w=240",
      name: "Person Name",
      date: "October 2020",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      imgUrl:
        "https://a0.muscache.com/im/pictures/user/04d3499b-6cca-4d1a-acc4-1fc4444e1002.jpg?im_w=240",
      name: "Person Name",
      date: "October 2020",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ],
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
                    variant="score"
                    category={category.type}
                    average={category.average}
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
                  variant="review"
                  imgUrl={review.imgUrl}
                  description={review.description}
                />
              </div>
            );
          })}
        </div>
        <div className={[space["m-t--16"]].join(" ")}>
          <Button
            {...border.args}
            size="md"
            title={`Show all ${numberOfReviews} reviews`}
          />
        </div>
      </div>
    </>
  );
};
