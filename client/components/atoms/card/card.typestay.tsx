import React from 'react';
import shape from '../../../styles/shape.module.scss';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import { Button } from '../button/button.component';

interface Props {
  card: any;
}

export const TypeStayCard: React.FC<Props> = ({ card }) => {
  return (
    <div style={{ height: '100%', minWidth: '100%', display: 'flex' }}>
      <div
        style={{
          width: '100%',
          marginRight: 6,
          marginTop: 4,
          marginBottom: 8,
        }}>
        <Button
          onPress={() => console.log('clicked ')}
          to='/'
          extendsTo={[
            layout['block'],
            shape['h--full'],
            shape['w--full'],
            space['m-r--8'],
          ].join(' ')}>
          <div className={[shape['br--12'], shape['shadow--sm']].join(' ')}>
            <div style={{ position: 'relative', paddingTop: '66.6667%' }}>
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}>
                <picture>
                  <source srcSet={card.imgUrl}></source>
                  <img
                    decoding='async'
                    src={card.imgUrl}
                    style={{ objectFit: 'cover', borderRadius: 12 }}
                  />
                </picture>
              </div>
            </div>
            <div style={{ padding: 16 }}>
              <p>{card.title}</p>
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};
