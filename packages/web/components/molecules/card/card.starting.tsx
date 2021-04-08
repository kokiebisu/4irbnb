import React, { useState } from 'react';
import { Video } from '@video';
import { $Icon, Icon } from '@icons';

export interface StartingCardProps {
  ratings?: number;
  reviews?: number;
  country?: string;
  title?: string;
  minCost?: number;
  slots?: string[];
  imgUrl?: string;
  videoUrl?: string;
}

const StartingCard: React.FC<StartingCardProps> = ({
  ratings = 5,
  reviews = 100,
  country = 'Italy',
  title = 'Title',
  minCost = 56,
  slots = ['11:30', '3:30'],
  imgUrl = 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1652939-media_library/original/a7f906fc-f4c8-4b27-a5e2-b783115350e4.jpeg?aki_policy=poster',
  videoUrl = 'https://a0.muscache.com/v/6f/00/6f00cc13-2903-5153-b36d-07cc55e453b3/6f00cc1329035153b36d07cc55e453b3_600k_1.mp4?imformat=h265&imwidth=400',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{ cursor: 'pointer' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border border-gray-300 rounded-md p-3"
    >
      <div
        className="h-full grid"
        style={{
          gridTemplateColumns: '130px 1fr 20px',
        }}
      >
        <div className="mr-3">
          <div className="relative" style={{ paddingTop: '130%' }}>
            <div className="absolute top-0 bottom-0 left-0 right-0">
              <div className="relative h-full w-full">
                {isHovered && <Video videoUrl={videoUrl} />}
                <img
                  className="object-fit block rounded-md h-full"
                  src={imgUrl}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center mb-3">
            <div className="mr-1">
              <Icon variant={$Icon.PROFILE} profileType="star" width={10} />
            </div>
            <div className="mr-1">
              <p className="text-xs">{ratings}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs">({reviews})</p>
            </div>
            <div className="mr-1">
              <p className="text-gray-500 text-xs">&nbsp;·&nbsp;{country}</p>
            </div>
          </div>
          <div className="mb-2">
            <h4 className="text-sm">{title}</h4>
          </div>
          <div className="mb-3">
            <h3 className="text-sm">
              ${minCost}
              <span>/person</span>
            </h3>
          </div>
          <div className="flex">
            {slots.map((slot, index) => {
              return (
                <div key={index} className="mr-2">
                  <div className="border border-gray-400 rounded-md px-3 py-2">
                    <h3 className="text-xs">{slot}p.m.</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Icon
            variant={$Icon.ACTION}
            actionType="heart"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export const starting = (props) => {
  return {
    starting: {
      component: <StartingCard {...props} />,
      style: '',
    },
  };
};
