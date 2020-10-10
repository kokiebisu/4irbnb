import React, { useRef } from 'react';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import shape from '../../../styles/shape.module.scss';
import { Card } from '../../atoms/card/card.component';
import { typeStays } from '../../../content';
import { typeStay as typeStayCard } from '../../atoms/card/card.stories';
import { Button } from '../../../components/atoms/button/button.component';
import sectionStyles from './section.module.scss';

interface Props {
  description?: string;
  pagination?: boolean;
  showAll?: any;
}

export const StaySection: React.FC<Props> = ({
  description,
  pagination,
  showAll,
}) => {
  return (
    <div>
      {console.log('typeSta', typeStays)}
      <div className={[layout['justify-between']].join(' ')}>
        <div>
          <div>
            <h2>Explore all types of unique stays</h2>
          </div>
          {description && (
            <div>
              <p>description</p>
            </div>
          )}
        </div>
        <div>{pagination && <div>pagination</div>}</div>
      </div>
      <div className={[layout['relative'], space['p-v--10']].join(' ')}>
        <ul
          className={[layout['hide-scrollbar']].join(' ')}
          style={{
            marginLeft: -5,
            marginRight: -5,
            display: 'flex',
            listStyle: 'none',
            padding: 0,
            overflowX: 'auto',
            overflowY: 'hidden',
            minWidth: '100%',
            scrollSnapType: 'x mandatory',
            height: '100%',
          }}>
          {typeStays.map((typeStay) => {
            return (
              <li
                className={[
                  sectionStyles['w__card'],
                  sectionStyles['flex__card'],
                ].join(' ')}
                style={{
                  scrollSnapAlign: 'start',
                  borderLeftStyle: 'solid',
                  borderLeftColor: 'transparent',
                }}>
                <Card {...typeStayCard.args} card={typeStay} />;
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        {showAll && (
          <div>
            <Button onPress={() => console.log('clicked')} to={showAll.url}>
              {showAll.description}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
