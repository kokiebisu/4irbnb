import { Card, $Card } from '@card';
import { Button, $Button } from '@button';

import space from '@styles/space.module.scss';
import font from '@styles/font.module.scss';
import layout from '@styles/layout.module.scss';
import { MutableRefObject } from 'react';

export interface CardsTemplateProps {
  state: {
    activeSlide: number;
    translate: number;
    transition: number;
  };
  containerRef: MutableRefObject<HTMLDivElement>;
  width: number;
  previous: () => void;
  next: () => void;
  title?: string;
  cards?: { imgUrl: string; videoUrl: string }[];
}

export const CardsTemplate: React.FC<CardsTemplateProps> = ({
  title = 'Title here',
  state,
  containerRef,
  width,
  previous,
  next,
  cards,
}) => {
  const displayingColumns = () => {
    if (width > 1128) {
      return 6;
    } else if (width > 1028) {
      return 5;
    } else if (width > 728) {
      return 4;
    } else if (width > 500) {
      return 3;
    } else {
      return 2;
    }
  };

  return (
    <div ref={containerRef} style={{ overflowX: 'hidden' }}>
      <div
        className={[
          space['m-v--16'],
          layout['flex'],
          layout['items-center'],
          layout['justify-between'],
        ].join(' ')}
      >
        <div>
          <h3 className={[font['size--20']].join(' ')}>{title}</h3>
        </div>
        <div className={[layout['flex'], layout['items-center']].join(' ')}>
          <div className={[space['m-r--8']].join(' ')}>
            <Button
              variant={$Button.UNDERLINE}
              title={`Show (${cards.length})`}
            />
          </div>
          <div className={[layout['flex'], layout['items-center']].join(' ')}>
            <div className={[space['m-h--4']].join(' ')}>
              <Button
                block
                variant={$Button.PAGINATE}
                animate
                direction="left"
                onClick={previous}
                //   disable={state.activeSlide === 0}
              />
            </div>
            <div className={[space['m-h--4']].join(' ')}>
              <Button
                block
                variant={$Button.PAGINATE}
                animate
                direction="right"
                onClick={next}
                //   disable={
                //     state.activeSlide ===
                //     Math.ceil(availables.length / displayingColumns) - 1
                //   }
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <div
          style={{
            width: width * (cards.length / displayingColumns()),
            transform: `translateX(-${state.translate}px)`,
            transition: `transform ease-out ${state.transition}s`,
          }}
        >
          <div style={{ display: 'flex' }}>
            {cards.map(({ imgUrl, videoUrl }, index) => {
              return (
                <div key={index} style={{ width: width / displayingColumns() }}>
                  <div style={{ marginRight: 10 }}>
                    <Card
                      variant={$Card.VIDEO}
                      imgUrl={imgUrl}
                      videoUrl={videoUrl}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
