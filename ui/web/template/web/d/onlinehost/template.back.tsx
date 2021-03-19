/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Bullet, $BULLET } from '@nextbnb/atoms/dist/bundle.esm'
import { Layout, $LAYOUT } from '@nextbnb/layout/dist/bundle.esm'

export const BackTemplate: React.FC<{
  back?: string
}> = () => {
  return (
    <Layout
      variant={$LAYOUT.onlinehost}
      title="We've got your back"
      subtitle="You’re not alone—you'll have access to educational tools and opportunities to help you grow as a host and entrepreneur."
    >
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          columnGap: 20,
          margin: '32px 0'
        }}
      >
        {['resources', 'events', 'community'].map((type, index) => {
          return (
            <div key={index} css={{ marginBottom: 16 }}>
              <Bullet variant={$BULLET.onlinehost} type={type} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
