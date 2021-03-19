/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Card, $CARD } from '@nextbnb/molecules/dist/bundle.esm'
import { Layout } from '@nextbnb/layout/dist/bundle.esm'

/**
 * Renders the priority section
 * @param {string[]} priorities - The priorities
 */
export const HostingTemplate: React.FC<{}> = () => {
  return (
    <Layout variant="homes" title="How hosting works">
      <div
        css={{
          marginTop: 16
        }}
      >
        <div
          css={{
            width: '100%',
            display: ['block', 'block', 'flex']
          }}
        >
          {/* {Object.keys(types).map((type, index) => {
            return (
              <div key={index} css={{ width: '25%', marginBottom: 64 }}>
                <Card variant={$CARD.hosting} type={type} />
              </div>
            );
          })} */}
        </div>
      </div>
    </Layout>
  )
}
