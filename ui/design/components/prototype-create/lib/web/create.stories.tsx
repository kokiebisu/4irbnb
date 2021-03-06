import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Prototype, CreateProps, $PROTOTYPE } from '..';

export default {
  title: 'Prototypes/Create',
  component: Prototype,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const TemplateStory: Story<CreateProps> = (args) => <Prototype {...args} />;

export const GetStarted = TemplateStory.bind({});
GetStarted.args = {
  variant: $PROTOTYPE.getstarted,
};

export const Room = TemplateStory.bind({});
Room.args = {
  variant: $PROTOTYPE.room,
};

export const Bedrooms = TemplateStory.bind({});
Bedrooms.args = {
  variant: $PROTOTYPE.bedrooms,
};

export const Bathrooms = TemplateStory.bind({});
Bathrooms.args = {
  variant: $PROTOTYPE.bathrooms,
};

export const Location = TemplateStory.bind({});
Location.args = {
  variant: $PROTOTYPE.location,
};

export const Amenities = TemplateStory.bind({});
Amenities.args = {
  variant: $PROTOTYPE.amenities,
};

export const Spaces = TemplateStory.bind({});
Spaces.args = {
  variant: $PROTOTYPE.spaces,
};

export const Description = TemplateStory.bind({});
Description.args = {
  variant: $PROTOTYPE.description,
};

export const Title = TemplateStory.bind({});
Title.args = {
  variant: $PROTOTYPE.title,
};

export const Phone = TemplateStory.bind({});
Phone.args = {
  variant: $PROTOTYPE.phone,
};

export const Requirements = TemplateStory.bind({});
Requirements.args = {
  variant: $PROTOTYPE.requirements,
};

export const Rules = TemplateStory.bind({});
Rules.args = {
  variant: $PROTOTYPE.rules,
};

export const Checkin = TemplateStory.bind({});
Checkin.args = {
  variant: $PROTOTYPE.checkin,
};

export const Advance = TemplateStory.bind({});
Advance.args = {
  variant: $PROTOTYPE.advance,
};
