/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRef } from 'react';
import Router from 'next/router';
import { Button, $BUTTON } from '@nextbnb/atoms';
import { Card, $CARD } from '@nextbnb/molecules';
import { useSlider, SliderProps } from '@nextbnb/design/hooks/useSlider';

/**
 * Renders the homes banner
 * @param {Object[]} hosts - List of hosts
 */
export const CommunityTemplate: React.FC<{
  title?: string;
  description?: string;
  hosts?: {
    name: string;
    stayType: string;
    location: string;
    imgUrl: string;
  }[];
}> = ({
  title = 'Title',
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  hosts = [undefined, undefined, undefined, undefined, undefined],
}) => {
  const width = 366;
  const sliderRef = useRef(null);
  const { state, previous, next }: SliderProps = useSlider(
    hosts,
    width,
    'banner'
  );

  return (
    <div
      css={{
        display: ['block', 'block', 'flex'],
        alignItems: 'center',
      }}
    >
      <div css={{ position: 'relative', zIndex: 500 }}>
        <div css={{ paddingLeft: ['24px', '24px', '64px'] }}>
          <div
            css={{
              maxWidth: 360,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              css={{
                marginBottom: 32,
              }}
            >
              <h1 css={{ lineHeight: 1, fontSize: 45 }}>{title}</h1>
            </div>
            <div
              css={{
                marginBottom: 32,
              }}
            >
              <h4 css={{ fontSize: 18, lineHeight: 1.5 }}>{description}</h4>
            </div>
            <div
              css={{
                display: 'inline-block',
              }}
            >
              <Button
                variant={$BUTTON.primary}
                size="md"
                title="Get started"
                onClick={() => Router.push('/become-a-host')}
                animate
              />
            </div>
          </div>
        </div>
      </div>
      <div
        css={{
          position: 'relative',
          zIndex: 500,
          paddingLeft: ['24px', '24px', '64px'],
          paddingTop: 50,
        }}
      >
        <div
          css={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            borderRadius: 12,
            zIndex: 50,
          }}
        >
          <div
            css={{
              borderRadius: 12,
              transform: `translateX(-${state.translate}px)`,
              transition: `transform ease-out ${state.transition}s`,
              height: '100%',
              width: width * hosts.length,
              display: 'flex',
            }}
          >
            {hosts.map((host, index) => {
              return (
                <div
                  key={index}
                  ref={sliderRef}
                  css={{
                    marginRight: 16,
                  }}
                >
                  <Card
                    variant={$CARD.host}
                    host={host?.name}
                    imgUrl={host?.imgUrl}
                    stayType={host?.stayType}
                    location={host?.location}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div
          css={{
            marginTop: 32,
            marginRight: 32,
            display: 'flex',
            justifyContent: ['flex-start', 'flex-start', 'flex-end'],
          }}
        >
          <div
            css={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <div
              css={{
                marginRight: 8,
              }}
            >
              <Button
                variant={$BUTTON.paginate}
                animate
                direction="left"
                onClick={previous}
              />
            </div>
            <div>
              <Button
                variant={$BUTTON.paginate}
                animate
                direction="right"
                onClick={next}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
