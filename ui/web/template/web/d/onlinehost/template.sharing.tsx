/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Card, $CARD } from '@nextbnb/molecules/dist/bundle.esm'
import { Layout, $LAYOUT } from '@nextbnb/layout/dist/bundle.esm'
import { Button, $BUTTON } from '@nextbnb/atoms/dist/bundle.esm'

export const SharingTemplate: React.FC<{}> = () => {
  const sharings = ['meditate', 'baking', 'magic']
  return (
    <Layout
      variant={$LAYOUT.onlinehost}
      title="How hosts are sharing their world"
      subtitle="These hosts bring the spirit of experiences to the screen with unique small group activities to do together while we're apart."
    >
      <div
        css={{
          margin: '100px 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          columnGap: 25
        }}
      >
        {sharings.map((sharing, index) => {
          return (
            <div key={index}>
              <Card variant={$CARD.sharing} sharing={sharing} />
            </div>
          )
        })}
      </div>
      <div
        css={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Button
          variant={$BUTTON.border}
          bold
          title="Start creating your experience"
        />
      </div>
    </Layout>
  )
}
