/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { Star } from '@nextbnb/assets/svg/original'
import {
  Bullet,
  $BULLET,
  Button,
  $BUTTON
} from '@nextbnb/atoms/dist/bundle.esm'
import { Card, $CARD } from '@nextbnb/molecules/dist/bundle.esm'

/**
 * Renders the reviews section
 * @param {Object[]} categories - Aspects of the ratings
 * @param {Object[]} reviews - Reviews by the users
 * @param {number} ratings - The average ratings
 * @param {number} numberOfReviews - The total number of reviews
 * @param {string} layoutType - The type of layout
 */
export const ReviewsTemplate: React.FC<{
  ratings?: number
  categories?: any
  numberOfReviews?: number
  reviews?: any
  layoutType?: string
}> = ({
  categories = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  ],
  reviews = [undefined, undefined, undefined, undefined],
  ratings = 5.0,
  numberOfReviews = 100,
  layoutType = 'room'
}) => {
  return (
    <div>
      <div
        css={{
          margin: '8px 0'
        }}
      >
        <div
          css={{
            padding: '8px 0',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div
            css={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <div
              css={{
                marginRight: 6
              }}
            >
              <Star width={20} />
            </div>
            <h3
              css={{
                marginRight: 6,
                fontSize: 22,
                color: 'grey.800'
              }}
            >
              {ratings.toFixed(1)}
            </h3>
            <h3
              css={{
                marginLeft: 2,
                fontSize: 22,
                color: 'grey.800'
              }}
            >
              ({numberOfReviews} reviews)
            </h3>
          </div>
        </div>
        {layoutType === 'room' && (
          <div
            css={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              marginTop: 12,
              marginRight: 24
            }}
          >
            {categories.map((category, index) => {
              return (
                <div
                  key={index}
                  css={{
                    padding: '8px 0'
                  }}
                  // className={[section["m__review--bullet"]].join(" ")}
                >
                  <Bullet
                    variant={$BULLET.score}
                    category={category?.type}
                    average={category?.average}
                  />
                </div>
              )
            })}
          </div>
        )}
        <div
          css={{
            width: '100%',
            marginTop: 16
          }}
          // className={[section["display__reviews--wrapper"]].join(" ")}
        >
          {reviews.map((review, index) => {
            return (
              <div key={index}>
                <Card
                  variant={$CARD.review}
                  imgUrl={review?.imgUrl}
                  description={review?.description}
                />
              </div>
            )
          })}
        </div>
        <div
          css={{
            marginTop: 16
          }}
        >
          <Button
            variant={$BUTTON.border}
            size="md"
            title={`Show all ${numberOfReviews} reviews`}
          />
        </div>
      </div>
    </div>
  )
}
