import { Button } from '@atoms';
import { Card, $Card } from '@card';
import { useSlider } from './appearance';

export interface CollectionsSegmentTemplateProps {
  title?: String;
  cards?: { imgUrl: string; videoUrl: string }[];
}

export const CollectionsSegmentTemplate: React.FC<CollectionsSegmentTemplateProps> = ({
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
      <div className="my-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl">{title}</h2>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="mx-1">
              <Button
                block
                variant="paginate"
                animate
                direction="left"
                onClick={handlePreviousSlide}
                disable={state.activeSlide === 0}
              />
            </div>
            <div className="mx-1">
              <Button
                block
                variant="paginate"
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
          <div className="flex">
            {cards.map((card, index) => {
              return (
                <div key={index}>
                  <div className="pr-3" style={{ ...cardStyles() }}>
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
