import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import { Layout, LayoutProps } from '..'
import { $LAYOUT } from '../constant/appearance'

export default {
  title: 'Layout',
  component: Layout
} as Meta

const TemplateStory: Story<LayoutProps> = (args) => <Layout {...args} />

export const landing = TemplateStory.bind({})
landing.args = {
  variant: $LAYOUT.landing
}

export const homes = TemplateStory.bind({})
homes.args = {
  variant: $LAYOUT.homes
}

export const onlinehost = TemplateStory.bind({})
onlinehost.args = {
  variant: $LAYOUT.onlinehost
}

export const currency = TemplateStory.bind({})
currency.args = {
  variant: $LAYOUT.currency
}

export const input = TemplateStory.bind({})
input.args = {
  variant: $LAYOUT.input
}

export const location = TemplateStory.bind({})
location.args = {
  variant: $LAYOUT.location
}
