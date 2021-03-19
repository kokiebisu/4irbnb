/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState } from 'react'
import { Video } from '@nextbnb/atoms-video/dist/bundle.esm'
import { Heart, Star } from '@nextbnb/assets/svg/original'
import { $CARD } from '../constant/appearance'

const StartingCard: React.FC<{
  ratings?: number
  reviews?: number
  country?: string
  title?: string
  minCost?: number
  slots?: string[]
  imgUrl?: string
  videoUrl?: string
}> = ({
  ratings = 5,
  reviews = 100,
  country = 'Italy',
  title = 'Title',
  minCost = 56,
  slots = ['11:30', '3:30'],
  imgUrl = 'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1652939-media_library/original/a7f906fc-f4c8-4b27-a5e2-b783115350e4.jpeg?aki_policy=poster',
  videoUrl = 'https://a0.muscache.com/v/6f/00/6f00cc13-2903-5153-b36d-07cc55e453b3/6f00cc1329035153b36d07cc55e453b3_600k_1.mp4?imformat=h265&imwidth=400'
}) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      css={{
        cursor: 'pointer',
        borderRadius: 8,
        padding: 12
      }}
      sx={{
        border: '1px solid',
        borderColor: 'grey.300'
      }}
    >
      <div
        css={{
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '130px 1fr 20px'
        }}
      >
        <div css={{ marginRight: 12 }}>
          <div css={{ paddingTop: '130%', position: 'relative' }}>
            <div
              css={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
              }}
            >
              <div
                css={{ height: '100%', width: '100%', position: 'relative' }}
              >
                {isHovered && <Video videoUrl={videoUrl} />}
                <img
                  src={imgUrl}
                  css={{
                    borderRadius: 8,
                    objectFit: 'cover',
                    height: '100%'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 8
            }}
          >
            <div css={{ marginRight: 3 }}>
              <Star width={10} height={10} />
            </div>
            <div css={{ marginRight: 3 }}>
              <p css={{ fontSize: 12 }}>{ratings}</p>
            </div>
            <div>
              <p sx={{ color: 'grey.500' }} css={{ fontSize: 12 }}>
                ({reviews})
              </p>
            </div>
            <div css={{ marginRight: 3 }}>
              <p css={{ fontSize: 12 }} sx={{ color: 'grey.500' }}>
                &nbsp;·&nbsp;{country}
              </p>
            </div>
          </div>
          <div css={{ marginBottom: 6 }}>
            <h4 css={{ fontSize: 14 }}>{title}</h4>
          </div>
          <div css={{ marginBottom: 10 }}>
            <h3 css={{ fontSize: 14 }}>
              ${minCost}
              <span>/person</span>
            </h3>
          </div>
          <div css={{ display: 'flex' }}>
            {slots.map((slot, index) => {
              return (
                <div key={index} css={{ marginRight: 6 }}>
                  <div
                    css={{
                      borderRadius: 6,
                      padding: '6px 10px'
                    }}
                    sx={{ border: '1px solid', borderColor: 'grey.800' }}
                  >
                    <h3 css={{ fontSize: 12 }}>{slot}p.m.</h3>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <Heart width={20} height={20} />
        </div>
      </div>
    </div>
  )
}

export const starting = (props) => {
  return {
    [$CARD.starting]: {
      component: <StartingCard {...props} />,
      css: {}
    }
  }
}
