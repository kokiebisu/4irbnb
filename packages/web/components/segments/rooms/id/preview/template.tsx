import layout from '@styles/layout.module.scss';
import color from '@styles/color.module.scss';
import font from '@styles/font.module.scss';
import space from '@styles/space.module.scss';
import section from '@template/index.module.scss';

import { Heart, Star, Share, Superhost } from '@svg/original';

import { Panel, $Panel } from '@panel';

export interface PreviewTemplateProps {
  title?: string;
  ratings?: number;
  numberOfReviews?: number;
  superhost?: boolean;
  location?: string;
  province?: string;
  country?: string;
  layoutType?: string;
  images?: string[];
}

/**
 * Renders the panel section
 * @param {string} title - Title of the section
 * @param {number} ratings - Rating of the room/experience
 * @param {number} numberOfReviews - Number of reviews for the room/experience
 * @param {boolean} superhost - Whether if the host is superhost or not
 * @param {string} location - Location of the room/experience
 * @param {string} province - Province of the room/experience
 * @param {string} country - Country of the room/experience
 * @param {string} layoutType - Type of layout
 * @param {string[]} images - Images for the panel
 */
export const PreviewTemplate: React.FC<PreviewTemplateProps> = ({
  title = 'Title here',
  ratings = 5.0,
  numberOfReviews = 100,
  superhost = false,
  location = 'City',
  province = 'Province',
  country = 'Country',
}) => {
  return (
    <div>
      <div>
        <div>
          <h3
            className={[
              color['c--gray__4'],
              font['size--28'],
              font['weight--500'],
            ].join(' ')}
          >
            {title}
          </h3>
        </div>
        <div
          className={[
            space['m-t--16'],
            space['m-b--28'],
            layout['flex'],
            layout['justify-between'],
            layout['items-center'],
          ].join(' ')}
        >
          <div
            className={[
              layout['flex'],
              layout['items-center'],
              layout['flex-wrap'],
            ].join(' ')}
          >
            <div>
              <Star height={14} />
            </div>
            <span
              className={[
                space['p-l--4'],
                color['c--g__2'],
                font['size--14'],
                font['weight--700'],
              ].join(' ')}
            >
              {ratings}
            </span>
            <span
              className={[
                space['p-l--4'],
                color['c--gray__1'],
                font['size--14'],
                font['weight--300'],
              ].join(' ')}
            >
              ({numberOfReviews})
            </span>
            {superhost && (
              <>
                <span className={[color['c--gray__1']].join(' ')}>
                  &nbsp;·&nbsp;
                </span>
                <div>
                  <Superhost height={14} fill="#E61E4D" />
                </div>
                <p
                  className={[
                    space['p-l--3'],
                    color['c--gray__1'],
                    font['size--14'],
                    font['weight--300'],
                  ].join(' ')}
                >
                  Superhost
                </p>
              </>
            )}
            <span
              className={[font['weight--300'], color['c--gray__1']].join(' ')}
            >
              &nbsp;·&nbsp;
            </span>
            <a
              className={[font['size--14'], color['c--gray__1']].join(' ')}
              href=""
            >
              <u>
                {location}, {province}, {country}
              </u>
            </a>
          </div>
          <div
            className={[layout['flex'], section['hidden__options']].join(' ')}
          >
            <div
              className={[
                space['p-r--6'],
                layout['flex'],
                layout['items-center'],
              ].join(' ')}
            >
              <a
                href="#"
                className={[
                  layout['flex'],
                  space['p-l--6'],
                  layout['items-center'],
                ].join(' ')}
              >
                <div>
                  <Share height={14} fill="#484848" />
                </div>
                <p
                  className={[
                    space['p-l--10'],
                    font['size--14'],
                    color['c--gray__2'],
                  ].join(' ')}
                >
                  <u>Share</u>
                </p>
              </a>
              <a
                className={[
                  layout['flex'],
                  space['m-l--12'],
                  layout['items-center'],
                ].join(' ')}
              >
                <div>
                  <Heart fill="#484848" height={17} />
                </div>
                <u
                  className={[
                    space['p-l--10'],
                    font['size--14'],
                    color['c--gray__2'],
                  ].join(' ')}
                >
                  Save
                </u>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Panel variant={$Panel.ROOM} />
      </div>
    </div>
  );
};
