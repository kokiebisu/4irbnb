import { Bullet } from '@bullet';
import { Icon } from '@atoms';
import section from '@template/index.module.scss';

export interface CharacteristicsSegmentTemplateProps {
  title?: string;
  stayType?: string;
  host?: string;
  guests?: number;
  bedrooms?: number;
  beds?: number;
  bathrooms?: number;
  hostImgUrl?: string;
  layoutType?: string;
  ratings?: number;
  numberOfReviews?: number;
  location?: string;
  country?: string;
  characteristics?: {
    time: number;
    devices: string[];
    people: number;
    private: number;
    languages: string[];
  };
}

/**
 * Renders the Characteristics of the room/experience
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
 * @param {Object} characteristics - The CharacteristicsSegment of the room/experience
 */
export const CharacteristicsSegmentTemplate: React.FC<CharacteristicsSegmentTemplateProps> = ({
  title,
  stayType,
  host,
  guests,
  bedrooms,
  beds,
  bathrooms,
  hostImgUrl,
  layoutType,
  ratings,
  numberOfReviews,
  location,
  country,
  characteristics,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mt-1">
        <div className="flex py-2" style={{ width: '75%' }}>
          <div className="flex mt-2 justify-center">
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="mr-1">
                  <Icon
                    variant="general"
                    generalType="devices"
                    inversed
                    width={18}
                    fill="black"
                  />
                </div>
                <div>
                  <h3 className="text-sm">ONLINE EXPERIENCE</h3>
                </div>
              </div>
              <div className="my-2">
                <h3 className="text-lg">{title}</h3>
              </div>
              <div className="flex items-center flex-wrap">
                <div>
                  <Icon variant={'profile'} profileType="star" width={12} />
                </div>
                <h3 className="pl-1 text-gray-600 text-sm">
                  {ratings.toFixed(1)}
                </h3>
                <p className="pl-1 text-gray-700 text-sm">
                  ({numberOfReviews})
                </p>
                <span className="font-light text-gray-500">&nbsp;·&nbsp;</span>
                <a className="text-sm text-gray-700" href="">
                  <u>
                    {location}, {country}
                  </u>
                </a>
                <span className="font-light text-gray 500">&nbsp;·&nbsp;</span>
                <a className="font-light text-sm text-gray-700" href="">
                  Part of &nbsp;
                  <u className="font-medium">Airbnb Online Experiences</u>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            className="rounded-full h-32 w-32 object-cover"
            src={hostImgUrl}
          />
        </div>
      </div>
      <div className="my-3 border-t border-gray-600">
        <div className="mt-7">
          <h3 className="text-lg">Online experience hosted by {host}</h3>
        </div>
        <div
          className={`py-1 ${[section['display__CharacteristicsSegment']].join(
            ' '
          )}`}
        >
          <Bullet
            variant="characteristic"
            characteristicType="time"
            time={characteristics['time']}
          />
          <Bullet
            variant="characteristic"
            characteristicType="devices"
            devices={characteristics['devices']}
          />
          <Bullet
            variant="characteristic"
            characteristicType="people"
            people={characteristics['people']}
          />
          <Bullet
            variant="characteristic"
            characteristicType="language"
            languages={characteristics['languages']}
          />
        </div>
      </div>
    </div>
  );
};
