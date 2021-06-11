import { Icon } from '@atoms';
import section from '@template/index.module.scss';

import { Button } from '@atoms';
import { Bullet } from '@atoms';
import { Card, $Card } from '@card';

export interface ReviewsSegmentTemplateProps {
  ratings?: number;
  categories?: any;
  numberOfReviews?: number;
  reviews?: any;
  layoutType?: string;
}

/**
 * Renders the reviews section
 * @param {Object[]} categories - Aspects of the ratings
 * @param {Object[]} reviews - Reviews by the users
 * @param {number} ratings - The average ratings
 * @param {number} numberOfReviews - The total number of reviews
 * @param {string} layoutType - The type of layout
 */
export const ReviewsSegmentTemplate: React.FC<ReviewsSegmentTemplateProps> = ({
  categories,
  reviews,
  ratings,
  numberOfReviews,
  layoutType,
}) => {
  return (
    <>
      <div className="my-3">
        <div className="py-3 flex items-center">
          <div className="flex items-center">
            <div className="mr-2">
              <Icon variant={'profile'} profileType="star" width={20} />
            </div>
            <h3 className="mr-2 text-2xl text-gray-700">
              {ratings.toFixed(1)}
            </h3>
            <h3 className="ml-1 text-2xl text-gray-700">
              ({numberOfReviews} reviews)
            </h3>
          </div>
        </div>
        {layoutType === 'room' && (
          <div className="grid mt-4 mr-6 grid-cols-2">
            {categories.length
              ? categories.map(
                  (
                    category: { type: string; average: number },
                    index: number
                  ) => {
                    return (
                      <div
                        key={index}
                        className={`${[section['m__review--bullet']].join(
                          ' '
                        )} py-2`}
                      >
                        <Bullet
                          variant="score"
                          category={category?.type}
                          average={category?.average}
                        />
                      </div>
                    );
                  }
                )
              : null}
          </div>
        )}
        <div
          className={`w-full mt-4 ${[section['display__reviews--wrapper']].join(
            ' '
          )}`}
        >
          {reviews.map((review, index) => {
            return (
              <div className="mr-12 mb-6" key={index}>
                <Card
                  variant={$Card.REVIEW}
                  imgUrl={review?.imgUrl}
                  description={review?.description}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-4">
          <Button
            variant="border"
            size="md"
            title={`Show all ${numberOfReviews} reviews`}
          />
        </div>
      </div>
    </>
  );
};
