import React from 'react';
import { Button } from '../button/button.component';
import { WorksCardProps } from './props';
import space from '../../../styles/space.module.scss';
import font from '../../../styles/font.module.scss';
import color from '../../../styles/color.module.scss';

export const WorksCard: React.FC<WorksCardProps> = ({ work = 'choose' }) => {
  const types = {
    choose: {
      imgUrl:
        'https://a0.muscache.com/im/pictures/969a398f-5131-4c7c-af87-62fbf39f9854.jpg?im_q=highq&im_w=480',
      title: 'Choose your requirements',
      description:
        'Decide how many people can stay and for how long. Set house rules that guests must follow when staying at your place.',
    },
    decide: {
      imgUrl:
        'https://a0.muscache.com/im/pictures/d04921d2-6064-440e-a18a-488406a2d3d4.jpg?im_q=highq&im_w=480',
      title: 'Decide when to host',
      description:
        'Block off dates on your calendar whenever you like—there’s no minimum time that your place needs to be available.',
    },
    own: {
      imgUrl:
        'https://a0.muscache.com/im/pictures/0d2e1b83-db57-4e75-952c-9b53eec0c46b.jpg?im_q=highq&im_w=480',
      title: 'Set your own prices',
      description:
        'What you charge is up to you. Our tools and insights can help you set nightly prices that are competitive for your area.',
    },
    welcome: {
      imgUrl:
        'https://a0.muscache.com/im/pictures/66f93645-d028-4983-b739-235cd667c60c.jpg?im_q=highq&im_w=480',
      title: 'Help guests feel welcome',
      description:
        'Follow our amenity and performance guidelines to create comfortable stays and earn great reviews.',
    },
  };
  return (
    <div>
      <div style={{ width: 225, height: 140 }}>
        <img
          src={types[work].imgUrl}
          alt='picture'
          style={{ objectFit: 'cover', borderRadius: 7 }}
        />
      </div>
      <div className={[space['m-v--16']].join(' ')}>
        <h3 className={[font['size--20'], color['c--gray__3']].join(' ')}>
          {types[work].title}
        </h3>
      </div>
      <div style={{ width: '80%' }}>
        <p
          className={[
            font['lh--15'],
            font['size--14'],
            color['c--gray__3'],
          ].join(' ')}>
          {types[work].description}
        </p>
      </div>
      <div className={[space['m-v--8']].join(' ')}>
        <Button
          color='#222222'
          font={12}
          to='/'
          type='underline'
          title='Learn more'
        />
      </div>
    </div>
  );
};
