import space from '@styles/space.module.scss';
import layout from '@styles/layout.module.scss';
import font from '@styles/font.module.scss';
import React from 'react';
import { Button, $Button } from '@button';
import { Card, $Card } from '@card';
import { useSlider } from './hooks';

export interface CollectionsTemplateProps {
  title?: String;
  cards?: { imgUrl: string; videoUrl: string }[];
}

export const CollectionsTemplate: React.FC<CollectionsTemplateProps> = ({
  title,
  cards,
}) => {
  const {
    width,
    state,
    containerRef,
    handleNextSlide,
    handlePreviousSlide,
  } = useSlider();

  const collectionStyles = () => {
    if (width > 1128) {
      return {
        width: width * (cards.length / 2),
        transform: `translateX(-${state.translate}px)`,
      };
    }
    if (width > 728) {
      return {
        width: width * (cards.length / 2),
        transform: `translateX(-${state.translate}px)`,
      };
    }
    return {
      width: width * (cards.length / 2),
      transform: `translateX(-${state.translate}px)`,
    };
  };

  const cardStyles = () => {
    if (width > 1128) {
      return {
        width: width / 2,
      };
    }
    if (width > 728) {
      return {
        width: 550,
      };
    }
    return {
      width: width,
    };
  };

  const paddingTopStyles = () => {
    if (width > 728) {
      return 60;
    }
    return 120;
  };

  return (
    <div ref={containerRef}>
      <div
        className={[
          space['m-v--16'],
          layout['flex'],
          layout['items-center'],
          layout['justify-between'],
        ].join(' ')}
      >
        <div>
          <h2 className={[font['size--28']].join(' ')}>{title}</h2>
        </div>
        <div className={[layout['flex'], layout['items-center']].join(' ')}>
          <div className={[layout['flex'], layout['items-center']].join(' ')}>
            <div className={[space['m-h--4']].join(' ')}>
              <Button
                block
                variant={$Button.PAGINATE}
                animate
                direction="left"
                onClick={handlePreviousSlide}
                disable={state.activeSlide === 0}
              />
            </div>
            <div className={[space['m-h--4']].join(' ')}>
              <Button
                block
                variant={$Button.PAGINATE}
                animate
                direction="right"
                onClick={handleNextSlide}
                disable={state.activeSlide === Math.ceil(cards.length / 2) - 1}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full overflow-x-auto">
        <div
          style={{
            ...collectionStyles(),
            transition: `transform ease-out ${state.transition}s`,
          }}
        >
          <div style={{ display: 'flex' }}>
            {cards.map((card, index) => {
              return (
                <div key={index}>
                  <div style={{ ...cardStyles(), paddingRight: 10 }}>
                    <Card
                      variant={$Card.COLLECTION}
                      paddingTop={paddingTopStyles()}
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
