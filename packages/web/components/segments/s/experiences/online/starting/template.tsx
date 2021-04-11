import { Button } from '@button';
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
    <div ref={containerRef} className="overflow-x-hidden">
      <div className="my-4 flex items-center justify-between">
        <div>
          <h3 className="text-2xl">{title}</h3>
        </div>
        <div className="flex items-center">
          <div className="mr-3">
            <Button variant="underline" title={`Show (${cards.length})`} />
          </div>
          <div className="flex items-center">
            <div className="mx-2">
              <Button
                block
                variant="paginate"
                animate
                direction="left"
                onClick={previous}
                //   disable={state.activeSlide === 0}
              />
            </div>
            <div className="mx-2">
              <Button
                block
                variant="paginate"
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
      <div className="h-full w-full">
        <div
          style={{
            width: width * (cards.length / displayingColumns()),
            transform: `translateX(-${state.translate}px)`,
            transition: `transform ease-out ${state.transition}s`,
          }}
        >
          <div className="flex">
            {cards.map((card, index) => {
              const { imgUrl, videoUrl } = card || {};
              return (
                <div key={index} style={{ width: width / displayingColumns() }}>
                  <div className="mr-3">
                    <Card
                      variant={$Card.STARTING}
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
