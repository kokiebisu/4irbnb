/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Bullet, $BULLET } from '@nextbnb/atoms/dist/bundle.esm'
import { DevicesInverse, Star } from '@nextbnb/assets/svg/original'

/**
 * Renders the characteristics of the room/experience
 * @param {string} title - Title of the room/experience
 * @param {string} stayType - Type of stay
 * @param {string} host - Name of the host
 * @param {number} guests - Number of guests
 * @param {number} bedrooms - Number of bedrooms
 * @param {number} beds - Number of beds
 * @param {string} hostImgUrl - Image of the host
 * @param {string} layoutType - Type of page it should display
 * @param {number} ratings - Ratings for the room/experience
 * @param {number} numberOfReviews - Number of reviews received
 * @param {string} location - Location of the room/experience
 * @param {string} country - Country of the room/experience
 * @param {Object} characteristics - The characteristics of the room/experience
 */
export const CharacteristicsTemplate: React.FC<{
  title?: string
  stayType?: string
  host?: string
  guests?: number
  bedrooms?: number
  beds?: number
  bathrooms?: number
  hostImgUrl?: string
  layoutType?: string
  ratings?: number
  numberOfReviews?: number
  location?: string
  country?: string
  characteristics?: string[]
}> = ({
  title = 'Making & Eating Soup Dumplings vegan Ok',
  stayType = 'Tiny house',
  host = 'Host',
  guests = 1,
  bedrooms = 1,
  beds = 1,
  bathrooms = 1,
  hostImgUrl = 'https://a0.muscache.com/im/pictures/user/ca3ae8e3-997b-4ec6-b3af-139dd46be44b.jpg?im_w=240',
  layoutType = 'experience',
  ratings = 4.9,
  numberOfReviews = 100,
  location = 'Shanghai',
  country = 'China',
  characteristics = {
    time: 75,
    devices: ['computer', 'phone', 'tablet'],
    people: 10,
    private: 100,
    languages: ['English']
  }
}) => {
  return (
    <div>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 4
        }}
      >
        <div css={{ width: '75%', display: 'flex', padding: '8px 0' }}>
          <div
            css={{
              display: 'flex',
              marginTop: 8,
              justifyContent: 'center'
            }}
          >
            <div css={{ display: 'flex', flexDirection: 'column' }}>
              <div css={{ display: 'flex', alignItems: 'center' }}>
                <div css={{ marginRight: 4 }}>
                  <DevicesInverse width={16} fill="black" />
                </div>
                <div>
                  <h3 css={{ fontSize: 12 }}>ONLINE EXPERIENCE</h3>
                </div>
              </div>
              <div css={{ margin: '8px 0' }}>
                <h3 css={{ fontSize: 24 }}>{title}</h3>
              </div>
              <div
                css={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}
              >
                <div>
                  <Star height={14} />
                </div>
                <h3
                  css={{
                    paddingLeft: 4,
                    color: 'grey.700',
                    fontSize: 14
                  }}
                >
                  {ratings.toFixed(1)}
                </h3>
                <p
                  css={{
                    paddingLeft: 4,
                    color: 'grey.800',
                    fontSize: 14
                  }}
                >
                  ({numberOfReviews})
                </p>
                <span
                  css={{
                    fontWeight: 300,
                    color: 'grey.600'
                  }}
                >
                  &nbsp;·&nbsp;
                </span>
                <a
                  css={{
                    fontSize: 14,
                    color: 'grey.800'
                  }}
                  href=""
                >
                  <u>
                    {location}, {country}
                  </u>
                </a>
                <span
                  css={{
                    fontWeight: 300,
                    color: 'grey.600'
                  }}
                >
                  &nbsp;·&nbsp;
                </span>
                <a
                  css={{
                    fontWeight: 300,
                    fontSize: 14,
                    color: 'grey.800'
                  }}
                  href=""
                >
                  Part of &nbsp;
                  <u css={{ fontWeight: 500 }}>Airbnb Online Experiences</u>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div css={{ display: 'flex', justifyContent: 'justify-end' }}>
          <img
            css={{
              objectFit: 'cover',
              borderRadius: 9999,
              height: 60,
              width: 60
            }}
            src={hostImgUrl}
          />
        </div>
      </div>
      <div css={{ margin: '12px 0', borderTop: '1px solid grey.300' }}>
        <div css={{ marginTop: 45 }}>
          <h3 css={{ fontSize: 22 }}>Online experience hosted by {host}</h3>
        </div>
        <div
          css={{
            display: ['flex', 'grid'],
            padding: '4px 0'
          }}
        >
          <Bullet
            extendsTo={{ marginTop: 24 }}
            variant={$BULLET.characteristic}
            characteristic="time"
            time={characteristics['time']}
          />
          <Bullet
            extendsTo={{ marginTop: 24 }}
            variant={$BULLET.characteristic}
            characteristic="devices"
            devices={characteristics['devices'].join(', ')}
          />
          <Bullet
            extendsTo={{ marginTop: 24 }}
            variant={$BULLET.characteristic}
            characteristic="people"
            people={characteristics['people']}
            private={characteristics['group']}
          />
          <Bullet
            extendsTo={{ marginTop: 24 }}
            variant={$BULLET.characteristic}
            characteristic="language"
            languages={characteristics['languages'].join(', ')}
          />
        </div>
      </div>
    </div>
  )
}
