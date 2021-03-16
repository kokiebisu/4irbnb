/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Button, $BUTTON } from '@nextbnb/atoms/dist/bundle.esm'
import { pulse } from '@nextbnb/design/keyframes/pulse'

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
            backgroundImage: imgUrl && `url(${imgUrl})`
          }}
          sx={{
            bg: !imgUrl && 'grey.700',
            animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`
          }}
        >
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }}
          >
            <div>
              <div>
                <h2
                  css={{
                    lineHeight: 1,
                    textAlign: 'center',
                    color: 'white'
                  }}
                  sx={{ fontSize: ['23px', '23px', '47px', '47px'] }}
                >
                  Learn more about hosting with Airbnb Experiences
                </h2>
              </div>
              <div
                css={{
                  marginTop: 32,
                  display: 'flex',
                  justifyContent: 'center'
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
  )
}
