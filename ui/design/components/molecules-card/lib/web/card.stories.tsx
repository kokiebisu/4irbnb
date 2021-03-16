import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Card, CardProps } from '..'
import { $CARD } from '../constant/appearance'

export default {
  title: 'Molecules/Card',
  component: Card,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: {
        disable: true
      }
    },
    extendsTo: {
      control: {
        disable: true
      }
    },
    to: {
      control: {
        disable: true
      }
    }
  }
} as Meta

const TemplateStory: Story<CardProps> = (args) => <Card {...args} />

export const Category = TemplateStory.bind({})
Category.args = {
  variant: $CARD.category
}

Category.decorators = [
  (Story) => (
    <div style={{ width: '33.3%' }}>
      <Story />
    </div>
  )
]

export const Horizontal = TemplateStory.bind({})
Horizontal.args = {
  variant: $CARD.horizontal
}

Horizontal.decorators = [
  (Story) => (
    <div style={{ maxWidth: 600 }}>
      <Story />
    </div>
  )
]

Horizontal.argTypes = {
  superhost: {
    control: 'boolean'
  },
  save: {
    control: 'boolean'
  }
}

export const Vertical = TemplateStory.bind({})
Vertical.args = {
  variant: $CARD.vertical
}
Vertical.argTypes = {
  save: {
    control: 'boolean'
  }
}

export const TypeStay = TemplateStory.bind({})
TypeStay.args = {
  variant: $CARD.typestay
}

TypeStay.decorators = [
  (Story) => (
    <div style={{ width: 200 }}>
      <Story />
    </div>
  )
]

export const Arrangements = TemplateStory.bind({})
Arrangements.args = {
  variant: $CARD.arrangements
}

export const Checkin = TemplateStory.bind({})
Checkin.args = {
  variant: $CARD.checkin
}

export const Review = TemplateStory.bind({})
Review.args = {
  variant: $CARD.review
}

export const Stay = TemplateStory.bind({})
Stay.args = {
  variant: $CARD.stay
}

export const Nearby = TemplateStory.bind({})
Nearby.args = {
  variant: $CARD.nearby
}

export const Online = TemplateStory.bind({})
Online.args = {
  variant: $CARD.online
}

Online.decorators = [
  (Story) => (
    <div style={{ maxWidth: 600 }}>
      <Story />
    </div>
  )
]

export const Participate = TemplateStory.bind({})
Participate.args = {
  variant: $CARD.participate
}
Participate.argTypes = {
  categoryType: {
    control: {
      type: 'select',
      options: ['call', 'private']
    }
  }
}

export const Available = TemplateStory.bind({})
Available.args = {
  variant: $CARD.available
}
Available.decorators = [
  (Story) => (
    <div style={{ maxWidth: '25%' }}>
      <Story />
    </div>
  )
]

export const Host = TemplateStory.bind({})
Host.args = {
  variant: $CARD.host
}
Host.decorators = [
  (Story) => (
    <div style={{ width: 400 }}>
      <Story />
    </div>
  )
]

export const Set = TemplateStory.bind({})
Set.args = {
  variant: $CARD.set
}

export const Again = TemplateStory.bind({})
Again.args = {
  variant: $CARD.again
}

export const Works = TemplateStory.bind({})
Works.args = {
  variant: $CARD.works
}
Works.argTypes = {
  work: {
    control: {
      type: 'select',
      options: ['design', 'share', 'submit', 'setup']
    }
  }
}

export const Sharing = TemplateStory.bind({})
Sharing.args = {
  variant: $CARD.sharing
}
Sharing.argTypes = {
  sharing: {
    control: {
      type: 'select',
      options: ['meditate', 'baking', 'magic']
    }
  }
}

export const How = TemplateStory.bind({})
How.args = {
  variant: $CARD.how
}
How.argTypes = {
  how: {
    control: {
      type: 'select',
      options: ['qualified', 'control', 'notified']
    }
  }
}
How.decorators = [
  (Story) => (
    <div style={{ width: 225 }}>
      <Story />
    </div>
  )
]

export const Hosting = TemplateStory.bind({})
Hosting.args = {
  variant: $CARD.hosting
}
// Hosting.argTypes = {
//   type: {
//     control: {
//       type: "select",
//       options: Object.keys(HostingTypes),
//     },
//   },
// };

export const Video = TemplateStory.bind({})
Video.args = {
  variant: $CARD.video
}
Video.decorators = [
  (Story) => (
    <div style={{ width: 300 }}>
      <Story />
    </div>
  )
]

export const Starting = TemplateStory.bind({})
Starting.args = {
  variant: $CARD.starting
}
Starting.decorators = [
  (Story) => (
    <div style={{ width: 400 }}>
      <Story />
    </div>
  )
]

export const Collection = TemplateStory.bind({})
Collection.args = {
  variant: $CARD.collection
}
Collection.decorators = [
  (Story) => (
    <div style={{ width: 500 }}>
      <Story />
    </div>
  )
]
