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
      imgUrl:
        'https://a0.muscache.com/im/pictures/50109909-bdb5-47d4-8883-e0e6fd00c18c.jpg',
      title: 'Learn to make soup dumplings in Shanghai',
    },
    {
      imgUrl:
        'https://a0.muscache.com/im/pictures/50109909-bdb5-47d4-8883-e0e6fd00c18c.jpg',
      title: 'Learn to make soup dumplings in Shanghai',
    },
    {
      imgUrl:
        'https://a0.muscache.com/im/pictures/50109909-bdb5-47d4-8883-e0e6fd00c18c.jpg',
      title: 'Learn to make soup dumplings in Shanghai',
    },
    {
      imgUrl:
        'https://a0.muscache.com/im/pictures/50109909-bdb5-47d4-8883-e0e6fd00c18c.jpg',
      title: 'Learn to make soup dumplings in Shanghai',
    },
  ],
}) => {
  return (
    <div className={[color['bg--black']].join(' ')}>
      <div
        style={{
          paddingTop: 'calc(-64px + (1.45 * (100% - 84px)))',
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
                    className={[
                      shape['w--full'],
                      section[`grid__online--${index}`],
                      section['grid__online--item'],
                    ].join(' ')}>
                    <Card
                      to='/'
                      type='online'
                      imgUrl={item.imgUrl}
                      title={item.title}
                      extendsTo={[
                        layout['block'],
                        shape['h-full'],
                        shape['w-full'],
                      ].join(' ')}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={[space['m-v--16']].join(' ')}>
        <Button type='border' title='Explore all' inverse size='sm' />
      </div>
    </div>
  );
};
