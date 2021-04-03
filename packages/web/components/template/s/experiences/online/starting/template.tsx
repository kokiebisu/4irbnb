import space from '@styles/space.module.scss';
import layout from '@styles/layout.module.scss';
import font from '@styles/font.module.scss';

import { Button, $Button } from '@button';

import { Card, $Card } from '@card';
import { useSlide } from '@hooks/useSlide';

export interface StartingTemplateProps {
  title?: string;
  cards?: { imgUrl: string; videoUrl: string }[];
}

export const StartingTemplate: React.FC<StartingTemplateProps> = ({
  title,
  cards,
}) => {
  const { state, containerRef, width, previous, next } = useSlide('whole');

  const displayingColumns = () => {
    if (width > 1128) {
      return 3;
    }
    if (width > 700) {
      return 2;
    }
    return 1;
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
            {cards.map(
              ({ imgUrl = undefined, videoUrl = undefined }, index) => {
                return (
                  <div
                    key={index}
                    style={{ width: width / displayingColumns() }}
                  >
                    <div style={{ marginRight: 10 }}>
                      <Card
                        variant={$Card.STARTING}
                        imgUrl={imgUrl}
                        videoUrl={videoUrl}
                      />
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
