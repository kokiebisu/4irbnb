/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
  Guidance,
  Protection,
  Requirements
} from '@nextbnb/design/assets/svg/original'
import { Button } from '@nextbnb/atoms-button/dist/bundle.esm.js'
import { $BULLET } from '../constants/appearance'

/**
 * Renders the priority bullet
 * @param {string} priority - Type of priority bullet
 */
const PriorityBullet: React.FC<{
  priority?: string
  onClick?: any
}> = ({ priority = 'protection', onClick }) => {
  const categories: {
    [type: string]: {
      icon: JSX.Element
      title: string
      description: string
      link: string
    }
  } = {
    protection: {
      icon: <Protection width={40} />,
      title: 'Host insurance and protection',
      description:
        'To support you in the rare event of an incident, each booking on AIrbnb includes property damae protection of up to $1M USD and liability insurance of up to $1M USD.',
      link: "How you're protected while hosting"
    },
    guidance: {
      icon: <Guidance width={40} />,
      title: 'COVID-19 safety guidance and support',
      description:
        'To help protect the health of our community, we’ve partnered with experts to create safety practices for everyone, plus a cleaning process for hosts.',
      link: 'Explore the enhanced cleaning process'
    },
    requirements: {
      icon: <Requirements width={40} />,
      title: 'Requirements for all guests',
      description:
        'To give hosts peace of mind, we offer guest identification and let you check out reviews of guests before they book. Our new Guest Standards Policy sets higher expectations for behaviour.',
      link: 'Steps we take to help hosts feel confident'
    }
  }
  return (
    <div>
      <div>{categories[priority].icon}</div>
      <div css={{ margin: '16px 0' }}>
        <h3 css={{ fontSize: 24 }}>{categories[priority].title}</h3>
      </div>
      <div css={{ marginBottom: 32 }}>
        <p>{categories[priority].description}</p>
      </div>
      <div>
        <u css={{ fontSize: 14 }}>{categories[priority].link}</u>
      </div>
    </div>
  )
}

export const priority = (props) => {
  return {
    [$BULLET.priority]: {
      component: <PriorityBullet {...props} />,
      css: {}
    }
  }
}
