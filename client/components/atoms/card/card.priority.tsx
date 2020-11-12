import {
  Guidance,
  Protection,
  Requirements,
} from '../../../public/svg/original';
import React from 'react';
import { Button } from '../button/button.component';
import space from '../../../styles/space.module.scss';
import font from '../../../styles/font.module.scss';
import { PriorityCardProps } from './props';

export const PriorityCard: React.FC<PriorityCardProps> = ({
  priority = 'protection',
}) => {
  const categories = {
    protection: {
      icon: <Protection width={40} />,
      title: 'Host insurance and protection',
      description:
        'To support you in the rare event of an incident, each booking on AIrbnb includes property damae protection of up to $1M USD and liability insurance of up to $1M USD.',
      link: "How you're protected while hosting",
    },
    guidance: {
      icon: <Guidance width={40} />,
      title: 'COVID-19 safety guidance and support',
      description:
        'To help protect the health of our community, we’ve partnered with experts to create safety practices for everyone, plus a cleaning process for hosts.',
      link: 'Explore the enhanced cleaning process',
    },
    requirements: {
      icon: <Requirements width={40} />,
      title: 'Requirements for all guests',
      description:
        'To give hosts peace of mind, we offer guest identification and let you check out reviews of guests before they book. Our new Guest Standards Policy sets higher expectations for behaviour.',
      link: 'Steps we take to help hosts feel confident',
    },
  };
  return (
    <div>
      <div>{categories[priority].icon}</div>
      <div className={[space['m-v--16']].join(' ')}>
        <h3 className={[font['size--24']].join(' ')}>
          {categories[priority].title}
        </h3>
      </div>
      <div className={[space['m-b--32']].join(' ')}>
        <p>{categories[priority].description}</p>
      </div>
      <div>
        <Button to='/'>
          <u className={[font['size--14']].join(' ')}>
            {categories[priority].link}
          </u>
        </Button>
      </div>
    </div>
  );
};
