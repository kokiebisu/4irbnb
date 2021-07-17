import { Card, $Card } from "@card";
import { Button } from "@atoms";
import { useSlide } from "@hooks/useSlide";

export type CardsSegmentTemplateProps = {
  title: string;
  cards: { imgUrl: string; videoUrl: string }[];
};

export const CardsSegmentTemplate = ({
  title,
  cards,
}: CardsSegmentTemplateProps): JSX.Element => {
  const { state, containerRef, width, previous, next } = useSlide("whole");

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
    <div ref={containerRef} className="overflow-x-hidden">
      <div className="my-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg">{title}</h3>
        </div>
        <div className="flex items-center">
          <div className="mr-2">
            <Button
              variant="underline"
              title={`Show (${cards.length})`}
              font={500}
              onClick={() => alert("yo")}
            />
          </div>
          <div className="flex items-center">
            <div className="mx-1">
              <Button
                variant="paginate"
                direction="left"
                onClick={previous}
                disabled={state.activeSlide === 0}
              />
            </div>
            <div className="px-1">
              <Button
                variant="paginate"
                direction="right"
                onClick={next}
                disabled={
                  state.activeSlide ===
                  Math.ceil(cards.length / displayingColumns()) - 1
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <div
          style={{
            width: width * (cards.length / displayingColumns()),
            transform: `translateX(-${state.translate}px)`,
            transition: `transform ease-out ${state.transition}s`,
          }}
        >
          <div className="flex">
            {cards.map(({ imgUrl, videoUrl }, index) => {
              return (
                <div key={index} style={{ width: width / displayingColumns() }}>
                  <div className="mr-3">
                    <Card variant="video" imgUrl={imgUrl} videoUrl={videoUrl} />
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
