import React from 'react';
import { action } from '@storybook/addon-actions';

// block
import { Button } from '../button';

export default {
  title: 'Design Systems|molecules/Button/Cookie',
  parameters: {
    component: Button,
    componentSubtitle:
      'Displays the two types of cookie buttons used for the landing popup notifications',
  },
  excludeStories: /.*Data$/,
};

const normalData = {
  name: 'OK',
};

const inverseData = {
  name: 'Cookie Preferences',
};

const actionsData = {
  onPress: action('onPress'),
};

export const base = () => (
  <Button type='cookie' {...normalData} {...actionsData} />
);

export const inverse = () => (
  <Button type='cookie' inverse {...inverseData} {...actionsData} />
);
