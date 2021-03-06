/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button, $BUTTON } from '@nextbnb/atoms';

export const MoreTemplate: React.FC<{ imgUrl?: string }> = ({ imgUrl }) => {
  return (
    <div>
      <div css={{ height: 0, paddingTop: '50%', position: 'relative' }}>
        <div
          css={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: imgUrl && `url(${imgUrl})`,
            backgroundColor: !imgUrl && 'lightgray',
          }}
        >
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <div>
              <div>
                <h2
                  css={{
                    lineHeight: 1,
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  Learn more about hosting with Airbnb Experiences
                </h2>
              </div>
              <div
                css={{
                  marginTop: 32,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Button
                  variant={$BUTTON.border}
                  title="Let's go"
                  inverse
                  bold
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
