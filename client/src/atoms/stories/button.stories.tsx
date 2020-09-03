import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Text, Button, Box, Icon } from 'atoms';
import { Props } from 'atoms/Button';

import {
  cookieButtonStyles,
  searchButtonStyles,
  menuButtonStyles,
  globeButtonStyles,
  buttonColors,
} from 'atoms/Button';

export default {
  title: 'Design Systems/Button',
  component: Button,
  argTypes: { onPress: { action: 'clicked' }, label: { control: 'text' } },
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const small = Template.bind({});
small.args = { size: 'sm' };

export const medium = Template.bind({});
medium.args = { size: 'md' };

export const large = Template.bind({});
large.args = { size: 'lg' };

export const inverse = Template.bind({});
inverse.args = { size: 'md', inverse: true };

export const cookie = Template.bind({});
cookie.args = {
  styles: cookieButtonStyles,
  inverse: false,
};

export const cookieInverse = Template.bind({});
cookieInverse.args = {
  styles: cookieButtonStyles,
  inverse: true,
};

export const search = Template.bind({});
search.args = {
  styles: searchButtonStyles,
  inverse: false,
  children: (
    <Box styles={searchButtonStyles.content}>
      <Icon styles={searchButtonStyles.icon} name='Search' />
      <Text styles={searchButtonStyles.text}>Search</Text>
    </Box>
  ),
};

export const menu = Template.bind({});
menu.args = {
  styles: menuButtonStyles,
  children: (
    <Box styles={menuButtonStyles.flex}>
      <Icon
        styles={[...menuButtonStyles.bars, ...menuButtonStyles.icon]}
        name='Bars'
      />
      <Icon
        styles={[...menuButtonStyles.avatar, ...menuButtonStyles.icon]}
        name='Avatar'
      />
    </Box>
  ),
};

export const globe = Template.bind({});
globe.args = {
  children: (
    <Box styles={globeButtonStyles.flex}>
      <Icon
        styles={globeButtonStyles.globe}
        fillColor={buttonColors.background}
        className='globe'
        name='Globe'
      />
      <Icon
        styles={globeButtonStyles.arrow}
        fillColor={buttonColors.background}
        className='arrow'
        name='ChevronDown'
      />
    </Box>
  ),
};

export const host = Template.bind({});
host.args = {
  children: <Text>Become a host</Text>,
};
