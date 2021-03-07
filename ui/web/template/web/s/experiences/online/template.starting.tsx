/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useSlide } from '@nextbnb/design/hooks/useSlide';
import { Button, $BUTTON } from '@nextbnb/atoms/dist/bundle.esm';
import { Card, $CARD } from '@nextbnb/molecules/dist/bundle.esm';

export const StartingTemplate = ({
  title = 'Starting in the next 6 hours',
}) => {
  const temporaryCards = [
    {
      imgUrl:
        'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1652939-media_library/original/a7f906fc-f4c8-4b27-a5e2-b783115350e4.jpeg?aki_policy=poster',
      videoUrl:
        'https://a0.muscache.com/v/6f/00/6f00cc13-2903-5153-b36d-07cc55e453b3/6f00cc1329035153b36d07cc55e453b3_600k_1.mp4?imformat=h265&imwidth=400',
    },
    {
      imgUrl:
        'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1652939-media_library/original/a7f906fc-f4c8-4b27-a5e2-b783115350e4.jpeg?aki_policy=poster',
      videoUrl:
        'https://a0.muscache.com/v/6f/00/6f00cc13-2903-5153-b36d-07cc55e453b3/6f00cc1329035153b36d07cc55e453b3_600k_1.mp4?imformat=h265&imwidth=400',
    },
    {
      imgUrl:
        'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1652939-media_library/original/a7f906fc-f4c8-4b27-a5e2-b783115350e4.jpeg?aki_policy=poster',
      videoUrl:
        'https://a0.muscache.com/v/6f/00/6f00cc13-2903-5153-b36d-07cc55e453b3/6f00cc1329035153b36d07cc55e453b3_600k_1.mp4?imformat=h265&imwidth=400',
    },
    {
      imgUrl:
        'https://a0.muscache.com/im/pictures/lombard/MtTemplate-1652939-media_library/original/a7f906fc-f4c8-4b27-a5e2-b783115350e4.jpeg?aki_policy=poster',
      videoUrl:
        'https://a0.muscache.com/v/6f/00/6f00cc13-2903-5153-b36d-07cc55e453b3/6f00cc1329035153b36d07cc55e453b3_600k_1.mp4?imformat=h265&imwidth=400',
    },
  ];

  const displayingColumns = () => {
    if (width > 1128) {
      return 3;
    }
    if (width > 700) {
      return 2;
    }
    return 1;
  };

  const { state, containerRef, width, previous, next } = useSlide('whole');

  return (
    <div ref={containerRef} style={{ overflowX: 'hidden' }}>
      <div
        css={{
          margin: '16px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h3
            css={{
              fontSize: 20,
            }}
          >
            {title}
          </h3>
        </div>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            css={{
              marginRight: 8,
            }}
          >
            <Button
              variant={$BUTTON.unerline}
              title={`Show (${temporaryCards.length})`}
            />
          </div>
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              css={{
                margin: '0 4px',
              }}
            >
              <Button
                block
                variant={$BUTTON.paginate}
                animate
                direction="left"
                onClick={previous}
                //   disable={state.activeSlide === 0}
              />
            </div>
            <div
              css={{
                margin: '0 4px',
              }}
            >
              <Button
                block
                variant={$BUTTON.paginate}
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
        css={{
          height: '100%',
          width: '100%',
        }}
      >
        <div
          css={{
            width: width * (temporaryCards.length / displayingColumns()),
            transform: `translateX(-${state.translate}px)`,
            transition: `transform ease-out ${state.transition}s`,
          }}
        >
          <div css={{ display: 'flex' }}>
            {temporaryCards.map(
              ({ imgUrl = undefined, videoUrl = undefined }, index) => {
                return (
                  <div key={index} css={{ width: width / displayingColumns() }}>
                    <div css={{ marginRight: 10 }}>
                      <Card
                        variant={$CARD.starting}
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
