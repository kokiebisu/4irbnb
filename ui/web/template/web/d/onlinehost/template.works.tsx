/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Button, $BUTTON } from '@nextbnb/atoms/dist/bundle.esm'
import { Layout, $LAYOUT } from '@nextbnb/layout/dist/bundle.esm'
import { Card, $CARD } from '@nextbnb/molecules/dist/bundle.esm'

export const WorksTemplate: React.FC<{}> = () => {
  const categories = ['design', 'share', 'submit', 'setup']
  return (
    <div>
      <Layout variant={$LAYOUT.homes} title="How hosting works">
        <div>
          {categories.map((category, index) => {
            return (
              <div css={{ marginBottom: 8 }} key={index}>
                <Card variant={$CARD.works} work={category} />
              </div>
            )
          })}
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
            bold
            title="Start creating your experience"
          />
        </div>
      </Layout>
    </div>
  )
}
