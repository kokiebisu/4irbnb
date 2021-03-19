/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Bullet, $BULLET } from '@nextbnb/atoms/dist/bundle.esm'

/**
 * Renders the experiences section
 */
export const ExperiencesTemplate: React.FC<{}> = () => {
  const experiences = ['hosts', 'activities', 'global']
  return (
    <div css={{ margin: '32px 0' }}>
      <div css={{ marginBottom: 24 }}>
        <h3 css={{ fontSize: 32 }}>Airbnb Online Experiences</h3>
      </div>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          columnGap: 15
        }}
      >
        {experiences.map((experience, index) => {
          return (
            <div key={index}>
              <Bullet variant={$BULLET.experience} experience={experience} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
