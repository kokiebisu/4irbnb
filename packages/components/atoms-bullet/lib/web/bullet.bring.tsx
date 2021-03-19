/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { CheckInverse } from '@nextbnb/assets/svg/original'
import { $BULLET } from '../constants/appearance'

/**
 * Renders the bring bullet
 * @param {string} title - Description of the bullet
 */
const BringBullet: React.FC<{
  title?: string
}> = ({ title = 'Description here' }) => {
  return (
    <div css={{ display: 'flex' }}>
      <div css={{ marginRight: '16px' }}>
        <CheckInverse width={24} />
      </div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  )
}

export const bring = (props) => {
  return {
    [$BULLET.bring]: {
      component: <BringBullet {...props} />,
      css: {}
    }
  }
}
