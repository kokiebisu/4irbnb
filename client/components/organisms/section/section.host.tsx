import React, { useState } from 'react';

import {
  Shield,
  Star,
  Superhost,
  Verified,
} from '../../../public/svg/original';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import shape from '../../../styles/shape.module.scss';
import section from './section.module.scss';
import { HostSectionProps } from './props';
import { Button } from '../../../components/atoms/button/button.component';
import { Bullet } from '../../../components/atoms/bullet/bullet.component';

const renderContent = (content: string) => {
  const wordArray = content.split(' ');
  const newArray = [];
  for (let i = 0; i < 20; i++) {
    newArray.push(wordArray[i]);
  }
  return newArray;
};

export const HostSection: React.FC<HostSectionProps> = ({
  name = 'Host Name',
  isSuperhost = true,
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  joined = 'February 2016',
  duringStay = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  reviews = 100,
  imgUrl = 'https://a0.muscache.com/im/pictures/user/ca3ae8e3-997b-4ec6-b3af-139dd46be44b.jpg?im_w=240',
  responseTime = 'within an hour',
  responseRate = 54,
}) => {
  const [descriptionDisplay, setDescriptionDisplay] = useState<boolean>(false);
  const [stayDisplay, setStayDisplay] = useState<boolean>(false);
  const defaultDescription = renderContent(description);
  const defaultDuringStay = renderContent(duringStay);
  return (
    <>
      <div className={[space['p-v--20']].join(' ')}>
        <div
          className={[
            layout['flex'],
            layout['items-center'],
            space['m-b--16'],
            layout['flex-wrap'],
          ].join(' ')}>
          <div className={[layout['flex'], layout['justify-center']].join(' ')}>
            <img
              style={{
                objectFit: 'cover',
                width: 64,
                height: 64,
                borderRadius: 9999,
              }}
              className={[space['m-r--14']].join(' ')}
              src={imgUrl}
            />
          </div>
          <div>
            <div className={[shape['h--50p']].join(' ')}>
              <h3 className={[font['size--24'], space['m-b--6']].join(' ')}>
                Hosted By {name}
              </h3>
              <p
                className={[
                  font['weight--100'],
                  color['c--gray__1'],
                  font['size--13'],
                ].join(' ')}>
                Joined in {joined}
              </p>
            </div>
          </div>
        </div>
        <div className={[layout['flex']].join(' ')}>
          <div
            className={[space['p-r--50'], section['w__host--left']].join(' ')}>
            <div>
              <div
                className={[
                  layout['flex'],
                  layout['items-center'],
                  layout['flex-wrap'],
                ].join(' ')}>
                <div className={[space['m-r--8'], space['p-r--4']].join(' ')}>
                  <Bullet type='host' categoryType='review' total={150} />
                </div>
                <div className={[space['m-r--8'], space['p-r--4']].join(' ')}>
                  <Bullet type='host' categoryType='verified' />
                </div>
                {isSuperhost && (
                  <div className={[space['m-r--8'], space['p-r--4']].join(' ')}>
                    <Bullet type='host' categoryType='superhost' />
                  </div>
                )}
              </div>
              <div className={[space['m-t--22']].join(' ')}>
                {descriptionDisplay ? (
                  <p
                    className={[font['lh--15'], font['weight--100']].join(' ')}>
                    {description}
                  </p>
                ) : (
                  <p
                    className={[font['weight--100'], font['lh--15']].join(' ')}>
                    {`${defaultDescription.join(' ')}...`}
                    <button
                      className={[
                        space['m-l--4'],
                        color['bg--transparent'],
                        font['size--16'],
                      ].join(' ')}
                      onClick={() => setDescriptionDisplay(true)}>
                      <u>read more</u>
                    </button>
                  </p>
                )}
              </div>
              {duringStay && (
                <div className={[space['m-v--16']].join(' ')}>
                  <h3
                    className={[
                      font['size--16'],
                      font['weight--500'],
                      space['m-b--6'],
                    ].join(' ')}>
                    During your stay
                  </h3>
                  {stayDisplay ? (
                    <div className={[space['p-v--8']].join(' ')}>
                      <p
                        className={[font['lh--15'], font['weight--100']].join(
                          ' '
                        )}>
                        {duringStay}
                      </p>
                    </div>
                  ) : (
                    <p className={[font['weight--100']].join(' ')}>
                      {`${defaultDuringStay.join(' ')}...`}
                      <button
                        className={[
                          space['m-l--4'],
                          color['bg--transparent'],
                          font['size--16'],
                          font['lh--15'],
                        ].join(' ')}
                        onClick={() => setStayDisplay(true)}>
                        <u>read more</u>
                      </button>
                    </p>
                  )}
                </div>
              )}

              {isSuperhost && (
                <div className={[space['p-v--6']].join(' ')}>
                  <p
                    className={[space['p-v--6'], font['weight--500']].join(
                      ' '
                    )}>
                    {name} is a Superhost
                  </p>
                  <p className={[font['weight--100']].join(' ')}>
                    Superhosts are experienced, highly rated hosts who are
                    committed to providing great stays for guests.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
            className={[section['w__host--right'], space['p-r--50']].join(' ')}>
            <div>
              <div className={[space['m-b--16']].join(' ')}>
                <p
                  className={[font['weight--100'], space['p-b--12']].join(' ')}>
                  Languages:&nbsp;
                  <span>English, Espanol</span>
                </p>
                <p
                  className={[font['weight--100'], space['p-b--12']].join(' ')}>
                  Response rate:&nbsp;
                  <span>{responseRate}%</span>
                </p>
                <p
                  className={[font['weight--100'], space['p-b--12']].join(' ')}>
                  Response time:&nbsp;
                  <span>{responseTime}</span>
                </p>
              </div>
            </div>
            <div>
              <Button type='border' size='md' title='Contact host' />
              <div
                className={[
                  layout['flex'],
                  layout['items-center'],
                  space['m-t--32'],
                ].join(' ')}>
                <div>
                  <Shield width={24} />
                </div>
                <p
                  className={[
                    font['size--12'],
                    font['weight--100'],
                    space['m-l--12'],
                  ].join(' ')}>
                  To protect your payment, never transfer money or communicate
                  outside of the Airbnb website or app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
