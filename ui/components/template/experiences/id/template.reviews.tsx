/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Star } from "../../../public/svg/original";
import { Button, $Button } from "../../../atoms/button/web";
import { Bullet, $Bullet } from "../../../atoms/bullet/web";
import { Card, $Card } from "../../../molecules/card/web";

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
      <div css={{ margin: "8px 0" }}>
        <div
          css={{
            padding: "8px 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div css={{ display: "flex", alignItems: "center" }}>
            <div css={{ marginRight: 6 }}>
              <Star width={20} />
            </div>
            <h3
              css={{
                marginRight: 6,
                fontSize: 22,
                color: "gray__3",
              }}
            >
              {ratings.toFixed(1)}
            </h3>
            <h3
              css={{
                marginLeft: 2,
                fontSize: 22,
                color: "gray__3",
              }}
            >
              ({numberOfReviews} reviews)
            </h3>
          </div>
        </div>
        {layoutType === "room" && (
          <div
            css={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              marginTop: 12,
              marginRight: 24,
            }}
          >
            {categories.map((category, index) => {
              return (
                <div
                  key={index}
                  css={{
                    marginRight: [0, 0, 48],
                    padding: "8px 0",
                  }}
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
          css={{
            width: "100%",
            marginTop: 16,
            display: ["block", "block", "grid"],
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          {reviews.map((review, index) => {
            return (
              <div
                sx={{
                  marginRight: [0, 0, 48],
                  marginBottom: [0, 0, 24],
                }}
                key={index}
              >
                <Card
                  variant={$Card.REVIEW}
                  imgUrl={review?.imgUrl}
                  description={review?.description}
                />
              </div>
            );
          })}
        </div>
        <div css={{ marginTop: 16 }}>
          <Button
            variant={$Button.BORDER}
            size="md"
            title={`Show all ${numberOfReviews} reviews`}
          />
        </div>
      </div>
    </>
  );
};
