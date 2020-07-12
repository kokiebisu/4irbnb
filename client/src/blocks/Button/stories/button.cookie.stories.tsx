import React from 'react';
import { action } from '@storybook/addon-actions';

// block
import { Button } from '../button';

// element
import { Text } from '../../../elements/Text';

export default {
  component: Button,
  title: 'Blocks/Button/Cookie',
  excludeStories: /.*Data$/,
};

const normalData = {
  children: <Text>OK</Text>,
};

const inverseData = {
  children: <Text>Cookie Preferences</Text>,
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
