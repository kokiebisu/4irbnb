/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Heart, Star } from '@nextbnb/design/assets/svg/original'
import { $CARD } from '../constant/appearance'
import { pulse } from '@nextbnb/design/keyframes/pulse'

/**
 * Renders the vertical card component
 * @param {Object} card - Information about the card
 * @param {boolean} save - Whether if the card can be saved
 */
const VerticalCard: React.FC<{
  imgUrl?: string
  superhost?: boolean
  ratings?: number
  save?: boolean
  number_of_reviews?: number
  country?: string
  title?: string
  cost?: number
}> = ({
  imgUrl,
  superhost,
  ratings = 5.0,
  number_of_reviews = 100,
  save,
  country = 'Country',
  title = 'Title',
  cost = 10
}) => {
  return (
    <div>
      <div css={{ position: 'relative', paddingTop: '135%' }}>
        <div
          css={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }}
        >
          {imgUrl ? (
            <img css={{ borderRadius: 12 }} src={imgUrl} />
          ) : (
            <div
              css={{ borderRadius: 12, width: '100%', height: '100%' }}
              sx={{
                bg: 'grey.700',
                animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`
              }}
            />
          )}
          <div
            css={{
              display: 'flex',
              padding: '8px 10px',
              position: 'absolute',
              top: 0,
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <div
              css={{ ...(!superhost && { visibility: 'hidden' }) }}
              sx={{ ...(!superhost && { color: 'white' }) }}
            >
              <div
                css={{
                  padding: '4px 8px',
                  borderRadius: 3,
                  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 8px'
                }}
                sx={{
                  bg: 'grey.100'
                }}
              >
                <p
                  css={{
                    fontSize: 12,
                    textTransform: 'uppercase',
                    letterSpacing: 0.3
                  }}
                >
                  Superhost
                </p>
              </div>
            </div>
            <div
              css={{
                ...(!save && { visibility: 'hidden' })
              }}
              sx={{ color: 'white' }}
            >
              <Heart
                fill="rgba(0, 0, 0, 0.5)"
                width={24}
                stroke="rgb(255, 255, 255)"
                strokeWidth={2}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        css={{
          marginTop: 4,
          display: 'flex',
          alignItems: 'center'
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
            css={{
              fontWeight: 100,
              fontSize: 13
            }}
            sx={{
              color: 'grey.500'
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
            fontSize: 15
          }}
          sx={{
            color: 'grey.900'
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
  )
}

export const vertical = (props) => {
  return {
    [$CARD.vertical]: {
      component: <VerticalCard {...props} />,
      css: {}
    }
  }
}
