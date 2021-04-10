import React from 'react';
import { Story, Meta } from '@storybook/react';
import {
  Prototype,
  CreateProps,
  $Prototype,
} from '@template/become-a-host/create';

export default {
  title: 'Prototypes/Create',
  component: Prototype,
} as Meta;

const TemplateStory: Story<CreateProps> = (args) => <Prototype {...args} />;

export const GetStarted = TemplateStory.bind({});
GetStarted.args = {
  variant: $Prototype.GETSTARTED,
};

export const Room = TemplateStory.bind({});
Room.args = {
  variant: $Prototype.ROOM,
};

export const Bedrooms = TemplateStory.bind({});
Bedrooms.args = {
  variant: $Prototype.BEDROOMS,
  guests: 0,
  bedrooms: 0,
  beds: 0,
  handleCounterAdd: (type) => alert(`Handled ${type} counter add`),
  handleCounterSubtract: (type) => alert(`Handled ${type} counter subtract`),
  handleSelectChange: (type) => alert(`Handled ${type} select change`),
};

export const Bathrooms = TemplateStory.bind({});
Bathrooms.args = {
  variant: $Prototype.BATHROOMS,
  bathrooms: 0,
  handleCounterAdd: (type) => alert(`Handled ${type} counter add`),
  handleCounterSubtract: (type) => alert(`Handled ${type} counter subtract`),
};

export const Location = TemplateStory.bind({});
Location.args = {
  variant: $Prototype.LOCATION,
};

export const Amenities = TemplateStory.bind({});
Amenities.args = {
  variant: $Prototype.AMENITIES,
};

export const Spaces = TemplateStory.bind({});
Spaces.args = {
  variant: $Prototype.SPACES,
};

export const Description = TemplateStory.bind({});
Description.args = {
  variant: $Prototype.DESCRIPTION,
};

export const Title = TemplateStory.bind({});
Title.args = {
  variant: $Prototype.TITLE,
};

export const Phone = TemplateStory.bind({});
Phone.args = {
  variant: $Prototype.PHONE,
  data: { phone: '000-000-0000' },
  setData: () => alert('set phone number'),
};

export const Requirements = TemplateStory.bind({});
Requirements.args = {
  variant: $Prototype.REQUIREMENTS,
};

export const Rules = TemplateStory.bind({});
Rules.args = {
  variant: $Prototype.RULES,
  data: { details: [] },
  setData: () => alert('set rules'),
};

export const Checkin = TemplateStory.bind({});
Checkin.args = {
  variant: $Prototype.CHECKIN,
  setData: () => alert('set date'),
  data: {
    notice: 0,
  },
};

export const Advance = TemplateStory.bind({});
Advance.args = {
  variant: $Prototype.ADVANCE,
  setData: () => alert('set days in advance'),
  data: {
    advance: 0,
  },
};

export const Period = TemplateStory.bind({});
Period.args = {
  variant: $Prototype.PERIOD,
  setData: () => alert('set period'),
  data: {
    min: 0,
    max: 0,
  },
};
