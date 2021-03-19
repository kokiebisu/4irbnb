/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
  CarbonMonoxideAlarm,
  Kitchen,
  PrivateEntrance,
  SmokeAlarm,
  Heating,
  TV
} from '@nextbnb/assets/svg/original'
import { web } from '../styles/bullet.amenity'
import { $BULLET } from '../constants/appearance'

/**
 * Renders the amenity bullet
 * @param {string} amenityType - Type of amenity
 * @param {boolean} removed - Strikes through if removed
 */
const AmenityBullet: React.FC<{
  amenityType?: string
  title?: string
  removed?: boolean
}> = ({ amenityType = 'kitchen', removed = false }) => {
  const amenityTypes: {
    [type: string]: { icon: JSX.Element; description: string }
  } = {
    smoke: { icon: <SmokeAlarm width={24} />, description: 'Smoke alarm' },
    tv: { icon: <TV width={24} />, description: 'TV' },
    kitchen: { icon: <Kitchen width={24} />, description: 'Kitchen' },
    heating: { icon: <Heating width={24} />, description: 'Heating' },
    entrance: {
      icon: <PrivateEntrance width={24} />,
      description: 'Private entrance'
    },
    carbon: {
      icon: <CarbonMonoxideAlarm width={24} />,
      description: 'Carbon monoxide alarm'
    }
  }
  return (
    <div css={web.wrapper}>
      {amenityTypes[amenityType].icon}
      {removed ? (
        <s css={web.label.text}>{amenityTypes[amenityType].description}</s>
      ) : (
        <p css={web.label.text}>{amenityTypes[amenityType].description}</p>
      )}
    </div>
  )
}

export const amenity = (props) => {
  return {
    [$BULLET.amenity]: {
      component: <AmenityBullet {...props} />,
      css: {}
    }
  }
}
