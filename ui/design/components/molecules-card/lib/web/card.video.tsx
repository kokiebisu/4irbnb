/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Heart, Star } from '@nextbnb/design/assets/svg/original';
import React, { useState } from 'react';
import { Video } from '@nextbnb/atoms-video/dist/bundle.esm';
import { $CARD } from '../constant/appearance';

/**
 * Renders the vertical card component
 * @param {Object} card - Information about the card
 * @param {boolean} save - Whether if the card can be saved
 */
const VideoCard: React.FC<{
  imgUrl?: string;
  videoUrl?: string;
  superhost?: boolean;
  ratings?: number;
  save?: boolean;
  number_of_reviews?: number;
  country?: string;
  title?: string;
  cost?: number;
}> = ({
  imgUrl = 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1652939-media_library/original/a7f906fc-f4c8-4b27-a5e2-b783115350e4.jpeg?aki_policy=poster',
  videoUrl = 'https://a0.muscache.com/v/6f/00/6f00cc13-2903-5153-b36d-07cc55e453b3/6f00cc1329035153b36d07cc55e453b3_600k_1.mp4?imformat=h265&imwidth=400',
  ratings = 5.0,
  number_of_reviews = 100,
  country = 'Country',
  title = 'Title',
  cost = 10,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        css={{ position: 'relative', paddingTop: '133%' }}
      >
        <div
          css={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}
        >
          <div
            css={{
              position: 'absolute',
              top: 10,
              right: 10,
              zIndex: 40,
              pointerEvents: 'none',
            }}
          >
            <Heart
              fill="rgba(0, 0, 0, 0.5)"
              width={24}
              stroke="rgb(255, 255, 255)"
              strokeWidth={2}
            />
          </div>
          <div css={{ height: '100%', width: '100%' }}>
            {isHovered && <Video videoUrl={videoUrl} />}
            <img
              css={{
                height: '100%',
                borderRadius: 10,
                cursor: 'pointer',
                objectFit: 'cover',
              }}
              src={imgUrl}
            />
          </div>
        </div>
      </div>

      <div
        css={{
          marginTop: 4,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div css={{ marginRight: 3 }}>
          <Star width={15} />
        </div>
        <div css={{ marginRight: 3 }}>
          <p css={{ fontWeight: 100, fontSize: 13 }}>{ratings}</p>
        </div>
        <div>
          <p
            css={{ fontWeight: 100, fontSize: 13 }}
            sx={{
              color: 'grey.500',
            }}
          >{`(${number_of_reviews})`}</p>
        </div>
        <div>
          <p sx={{ color: 'grey.500' }}>&nbsp; · &nbsp; </p>
        </div>
        <div>
          <p css={{ fontSize: 13, fontWeight: 100 }} sx={{ color: 'grey.500' }}>
            {country}
          </p>
        </div>
      </div>
      <div>
        <p
          css={{
            letterSpacing: 0.4,
            fontWeight: 100,
            fontSize: 15,
          }}
          sx={{
            color: 'grey.900',
          }}
        >
          {title}
        </p>
      </div>
      <div>
        <p css={{ fontWeight: 100 }}>
          <span css={{ fontWeight: 500 }}>From ${cost}</span>
          /person
        </p>
      </div>
    </div>
  );
};

export const video = (props) => {
  return {
    [$CARD.video]: {
      component: <VideoCard {...props} />,
      css: {},
    },
  };
};
