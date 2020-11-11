import React from 'react';
import { Card } from '../../../components/atoms/card/card.component';
import { OnlineSectionProps } from './props';
import section from './section.module.scss';
import color from '../../../styles/color.module.scss';
import { Button } from '../../../components/atoms/button/button.component';
import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import shape from '../../../styles/shape.module.scss';

export const OnlineSection: React.FC<OnlineSectionProps> = ({
  items = [
    {
      small:
        'https://a0.muscache.com/im/pictures/0e46f398-42f5-4897-9168-f84622aeba58.jpg',
      large:
        'https://a0.muscache.com/im/pictures/78010337-07f0-4154-9528-363b97b54699.jpg',
      title: 'Learn to make soup dumplings in Shanghai',
    },
    {
      small:
        'https://a0.muscache.com/im/pictures/50566ef1-6e6d-4672-be8c-33d132f69470.jpg',
      large:
        'https://a0.muscache.com/im/pictures/0735e435-3d1d-4aec-b536-9ee54f299ce6.jpg',
      title: 'Explore feminism with street art and graffiti',
    },
    {
      small:
        'https://a0.muscache.com/im/pictures/7d7d02c0-fe0c-4e6c-974e-029b91656e00.jpg',
      large:
        'https://a0.muscache.com/im/pictures/1793b6aa-4c3c-4193-a65a-09b440b2ca2c.jpg',
      title: 'Go backstage with a New York magician',
    },
    {
      small:
        'https://a0.muscache.com/im/pictures/701b98c5-0068-4bb7-9448-63d4275e679e.jpg',
      large:
        'https://a0.muscache.com/im/pictures/925f99bb-c5bc-4d82-9803-518abeef7e2e.jpg',
      title: 'Craft cocktails and talk gender with a bartender',
    },
  ],
  dark = false,
}) => {
  return (
    <div
      className={`${dark && color['bg--black']} ${[space['m-t--16']].join(
        ' '
      )}`}>
      <div
        className={[section['p__online']].join(' ')}
        style={{
          position: 'relative',
        }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}>
          <div
            style={{
              height: '100%',
              overflowX: 'auto',
              overflowY: 'hidden',
              paddingRight: 24,
              paddingTop: 0,
              scrollPaddingTop: 0,
              scrollPaddingRight: 24,
              scrollSnapType: 'x mandatory',
            }}>
            <div className={[section['grid__online']].join(' ')}>
              {items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${[
                      shape['w--full'],
                      section[`grid__online--${index}`],
                      section['grid__online--item'],
                    ].join(' ')}} ${
                      index === 3 && [section['h__online--last']].join()
                    }`}>
                    <Card
                      to='/'
                      type='online'
                      small={item.small}
                      large={item.large}
                      title={item.title}
                      inverse={dark}
                      extendsTo={[
                        layout['block'],
                        shape['h--full'],
                        shape['w--full'],
                      ].join(' ')}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={[space['m-v--32']].join(' ')}>
        <Button type='border' title='Explore all' size='sm' inverse={dark} />
      </div>
    </div>
  );
};
