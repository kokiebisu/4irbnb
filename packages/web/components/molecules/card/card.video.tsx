import { Star } from '@svg/original';
import { $Icon, Icon } from '@icons';
import React, { useState } from 'react';
import { Video } from '@video';

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
        style={{ paddingTop: '133%' }}
        className="relative"
      >
        <div className="absolute top-0 bottom-0 right-0 left-0">
          <div className="absolute pointer-events-none z-40 top-3 right-3">
            <Icon
              variant={$Icon.ACTION}
              actionType="heart"
              fill="rgba(0, 0, 0, 0.5)"
              width={24}
            />
          </div>
          <div className="h-full w-full">
            {isHovered && <Video videoUrl={videoUrl} />}
            <img
              className="h-full rounded-lg cursor-pointer object-cover"
              src={imgUrl}
            />
          </div>
        </div>
      </div>

      <div className="mt-1 flex items-center">
        <div className="mr-1">
          <Star width={15} />
        </div>
        <div className="mr-1">
          <p className="font-thin text-xs">{ratings}</p>
        </div>
        <div>
          <p className="font-thin text-sm text-gray-500">{`(${number_of_reviews})`}</p>
        </div>
        <div>
          <p className="text-gray-500">&nbsp; · &nbsp; </p>
        </div>
        <div>
          <p className="text-sm font-thin text-gray-500">{country}</p>
        </div>
      </div>
      <div>
        <p className="tracking-tight font-thin text-sm text-gray-500">
          {title}
        </p>
      </div>
      <div>
        <p className="font-thin">
          <span className="font-medium">From ${cost}</span>
          /person
        </p>
      </div>
    </div>
  );
};

export const video = (props) => {
  return {
    video: {
      component: <VideoCard {...props} />,
      style: '',
    },
  };
};
