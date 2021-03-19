/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
  Modal,
  $MODAL,
  Header,
  $HEADER
} from '@nextbnb/organisms/dist/bundle.esm'

export const BannerTemplate: React.FC<{}> = () => {
  return (
    <div css={{ backgroundColor: '#F2ECE2', paddingBottom: 64 }}>
      <div>
        <Header variant={$HEADER.homes} />
      </div>
      <div
        css={{
          display: 'flex'
        }}
      >
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            width: '50%'
          }}
        >
          <div>
            <div>
              <div
                css={{
                  margin: '32px 0'
                }}
              >
                <h2 css={{ letterSpacing: 1.2, fontSize: 16 }}>
                  SEE WHAT'S POSSIBLE
                </h2>
              </div>
            </div>
            <div>
              <h2
                css={{
                  fontSize: 40
                }}
              >
                Share your passion for hospitality--become a host
              </h2>
            </div>
          </div>
        </div>
        <div
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%'
          }}
        >
          <Modal variant={$MODAL.listing} />
        </div>
      </div>
    </div>
  )
}
