import { useRef } from 'react';
import { Card, $Card } from '@card';
import { Button, $Button } from '@button';
import { useSlider } from '@hooks/useSlider';
import { useHandleContainerResize } from '@hooks/useHandleContainerResize';

export interface AlsoTemplateProps {
  items?: any;
  title?: string;
}

/**
 * Renders the also section
 * @param {string[]} items - List of suggested cities
 */
export const AlsoTemplate: React.FC<AlsoTemplateProps> = ({ items, title }) => {
  const containerRef = useRef<HTMLDivElement>();
  const width: number = useHandleContainerResize(containerRef)[0];
  const { state, previous, next } = useSlider(items, width, 'also');

  return (
    <div className="overflow-x-hidden">
      <div ref={containerRef} className="flex items-center justify-between">
        <div className="my-4">
          <h3 className="text-lg">{title}</h3>
        </div>
        <div className="flex items-center">
          <div className="mx-2">
            <Button
              variant={$Button.PAGINATE}
              animate
              direction="left"
              onClick={previous}
              disable={state.activeSlide === 0}
            />
          </div>
          <div className="mx-2">
            <Button
              variant={$Button.PAGINATE}
              animate
              direction="right"
              onClick={next}
              disable={
                state.activeSlide === items.length - (width > 728 ? 3 : 2)
              }
            />
          </div>
        </div>
      </div>
      <div
        className="h-full"
        style={{
          width: width * (items.length / 2),
          transform: `translateX(-${state.translate}px)`,
          transition: `transform ease-out ${state.transition}s`,
        }}
      >
        <div className="flex">
          {items.map((item, index) => {
            return (
              <div style={{ width: width / (width > 728 ? 3 : 2) }} key={index}>
                <div className="mb-3">
                  <Card
                    variant={$Card.NEARBY}
                    to={item[0]?.to}
                    imgUrl={item?.pic}
                    title={item[0]?.city || 'Item'}
                    subtitle={`${item[0]?.hours || 1} hour drive`}
                    size="lg"
                  />
                </div>
                <div>
                  <Card
                    variant={$Card.NEARBY}
                    to={item[1]?.to}
                    imgUrl={item?.pic}
                    title={item[1]?.city || 'Item'}
                    subtitle={`${item[0]?.hours || 1} hour drive`}
                    size="lg"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
