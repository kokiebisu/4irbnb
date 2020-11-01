import * as React from 'react';
import { useState } from 'react';

import font from '../../../styles/font.module.scss';
import space from '../../../styles/space.module.scss';
import color from '../../../styles/color.module.scss';
import shape from '../../../styles/shape.module.scss';
import { DescriptionSectionProps } from './props';

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  data = {
    description: 'Description here',
    space: 'Space here',
    access: 'Access here',
  },
}) => {
  const [display, setDisplay] = useState<boolean>(false);

  const changeLength = () => {
    setDisplay(!display);
  };

  const renderDescription = (description: string) => {
    const wordArray = description.split(' ');
    const newArray = [];
    for (let i = 0; i < 45; i++) {
      newArray.push(wordArray[i]);
    }
    return newArray;
  };

  const newArray = renderDescription(data.description);
  return (
    <div>
      {display ? (
        <div>
          <p className={[font['weight--300'], color['c--gray__2']].join(' ')}>
            {data.description}
          </p>
          <div className={[space['p-v--8']].join(' ')}>
            <h3 className={[space['m-b--6']].join(' ')}>The space</h3>
            <p className={[font['weight--300'], color['c--gray__2']].join(' ')}>
              {data.space}
            </p>
          </div>
          <div className={[space['p-v--8']].join(' ')}>
            <h3 className={[space['m-b--6']].join(' ')}>Guest access</h3>
            <p className={[font['weight--300'], color['c--gray__2']].join(' ')}>
              {data.access}
            </p>
          </div>
        </div>
      ) : (
        <>
          <p className={[font['weight--300'], color['c--gray__2']].join(' ')}>
            {`${newArray.join(' ')}...`}
            <button
              onClick={() => {
                setDisplay(true);
                changeLength();
              }}
              className={[color['b-b--gray__2'], font['weight--300']].join(
                ' '
              )}>
              Read More
            </button>
          </p>
        </>
      )}
      <div className={[space['m-t--20'], space['m-b--32']].join(' ')}>
        <a
          className={[
            space['p-v--6'],
            space['p-h--12'],
            color['b--black'],
            shape['br--10'],
          ].join(' ')}
          href=''>
          Contact host
        </a>
      </div>
    </div>
  );
};
