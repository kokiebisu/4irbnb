import React from 'react';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import shape from '../../../styles/shape.module.scss';
import { Card } from '../../../components/atoms/card/card.component';
import { typeStays } from '../../../content';
import { typeStay as typeStayCard } from '../../../components/atoms/card/card.stories';

export const TypeStay: React.FC<{}> = () => {
  return (
    <div>
      <div>
        <h2>Explore all types of unique stays</h2>
      </div>
      <div className={[layout['relative'], space['p-v--10']].join(' ')}>
        <ul
          style={{
            marginLeft: -5,
            marginRight: -5,
            display: 'flex',
            listStyle: 'none',
            padding: 0,
            overflowX: 'auto',
            overflowY: 'hidden',
            minWidth: '100%',
            scrollSnapAlign: 'x mandatory',
            height: '100%',
          }}>
          <li
            style={{
              maxWidth: '25%',
              scrollSnapAlign: 'start',
              flex: '0 0 25%',
            }}>
            {typeStays.map((typeStay) => {
              return <Card {...typeStayCard.args} card={typeStay} />;
            })}
          </li>
        </ul>
      </div>
    </div>
  );
};
