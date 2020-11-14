import React from 'react';

/**
 * Styles
 */
import font from '../../../styles/font.module.scss';
import space from '../../../styles/space.module.scss';
import color from '../../../styles/color.module.scss';

/**
 * Props
 */
import { KnowSectionProps } from './props';

/**
 * Components
 */
import { Bullet } from '../../../components/atoms/bullet/bullet.component';

/**
 * Renders the know section
 * @param {string[]} houseRules - List of rules the users must follow
 * @param {string[]} healths - List of health guidelines
 * @param {string} layoutType - The type of layout
 */
export const KnowSection: React.FC<KnowSectionProps> = ({
  houseRules = [
    'checkin',
    'checkout',
    'self',
    'children',
    'smoking',
    'pets',
    'parties',
  ],
  healths = ['cleaning', 'distancing', 'caution', 'check'],
  layoutType = 'room',
}) => {
  const types = {
    room: (
      <>
        <div>
          <div className={[space['m-b--16']].join(' ')}>
            <h3>House rules</h3>
          </div>
          <div className={[space['m-b--32']].join(' ')}>
            {houseRules.map((item, index) => {
              return (
                <div key={index} className={[space['m-b--6']].join(' ')}>
                  <Bullet type='know' categoryType={item} />
                </div>
              );
            })}
          </div>
          <div>
            <u>Show all</u>
          </div>
        </div>

        <div>
          <div className={[space['m-b--16']].join(' ')}>
            <h3>Health & safety</h3>
          </div>
          <div className={[space['m-b--32']].join(' ')}>
            {healths.map((item, index) => {
              return (
                <div key={index} className={[space['m-b--6']].join(' ')}>
                  <Bullet type='know' categoryType={item} />
                </div>
              );
            })}
          </div>
          <div>
            <u>Show all</u>
          </div>
        </div>
        <div>
          <div className={[space['m-b--16']].join(' ')}>
            <h3>Cancellation policy</h3>
          </div>
          <div className={[space['m-b--32']].join(' ')}>
            <p className={[font['weight--100']].join(' ')}>
              Add your trip to get the cancellation details for this stay.
            </p>
          </div>
          <div>
            <u>Add dates</u>
          </div>
        </div>
      </>
    ),
    experience: (
      <>
        <div style={{ width: '50%' }} className={[space['m-r--32']].join(' ')}>
          <div className={[space['m-b--16']].join(' ')}>
            <h3 className={[font['size--16']].join(' ')}>
              Cancellation policy
            </h3>
          </div>
          <div className={[space['m-b--32']].join(' ')}>
            <p>
              Any experience can be cancelled and fully refunded within 24 hours
              of purchase, or at least 7 days before the experience starts.
            </p>
          </div>
          <div>
            <u>Learn more</u>
          </div>
        </div>

        <div style={{ width: '50%' }} className={[space['m-r--32']].join(' ')}>
          <div className={[space['m-b--16']].join(' ')}>
            <h3 className={[font['size--16']].join(' ')}>Guest requirements</h3>
          </div>
          <div className={[space['m-b--32']].join(' ')}>
            <p>
              You’ll need an internet connection and the ability to stream audio
              and video to participate. A link and details on how to join will
              be included in your booking confirmation email.
            </p>
          </div>
          <div>
            <u>Show more</u>
          </div>
        </div>
      </>
    ),
  };

  return (
    <div>
      <div>
        <h3
          className={[
            font['weight--500'],
            space['m-b--20'],
            color['c--gray__3'],
            font['size--24'],
          ].join(' ')}>
          Things to know
        </h3>
      </div>
      <div
        style={{
          display: 'flex',
        }}
        className={[].join(' ')}>
        {types[layoutType]}
      </div>
    </div>
  );
};
