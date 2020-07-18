import React from 'react';
import { action } from '@storybook/addon-actions';

// block
import { Button } from '../button';

// element
import { Text } from '../../../atoms/Text';

export default {
  component: Button,
  title: 'Blocks/Button/Cookie',
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
