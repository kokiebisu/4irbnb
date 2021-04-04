import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Prototype, CreateProps, $Prototype } from '@prototype/create';

export default {
  title: 'Prototypes/Create',
  component: Prototype,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const CreatePrototype: Story<CreateProps> = (args) => <Prototype {...args} />;

export const GetStarted = CreatePrototype.bind({});
GetStarted.args = {
  variant: $Prototype.GETSTARTED,
};

export const Room = CreatePrototype.bind({});
Room.args = {
  variant: $Prototype.ROOM,
};

export const Bedrooms = CreatePrototype.bind({});
Bedrooms.args = {
  variant: $Prototype.BEDROOMS,
};

export const Bathrooms = CreatePrototype.bind({});
Bathrooms.args = {
  variant: $Prototype.BATHROOMS,
};

export const Location = CreatePrototype.bind({});
Location.args = {
  variant: $Prototype.LOCATION,
};

export const Amenities = CreatePrototype.bind({});
Amenities.args = {
  variant: $Prototype.AMENITIES,
};

export const Spaces = CreatePrototype.bind({});
Spaces.args = {
  variant: $Prototype.SPACES,
};

export const Description = CreatePrototype.bind({});
Description.args = {
  variant: $Prototype.DESCRIPTION,
};

export const Title = CreatePrototype.bind({});
Title.args = {
  variant: $Prototype.TITLE,
};

export const Phone = CreatePrototype.bind({});
Phone.args = {
  variant: $Prototype.PHONE,
};

export const Requirements = CreatePrototype.bind({});
Requirements.args = {
  variant: $Prototype.REQUIREMENTS,
};

export const Rules = CreatePrototype.bind({});
Rules.args = {
  variant: $Prototype.RULES,
};

export const Checkin = CreatePrototype.bind({});
Checkin.args = {
  variant: $Prototype.CHECKIN,
};

export const Advance = CreatePrototype.bind({});
Advance.args = {
  variant: $Prototype.ADVANCE,
};
