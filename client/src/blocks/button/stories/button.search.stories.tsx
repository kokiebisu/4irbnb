import React from 'react';
import { action } from '@storybook/addon-actions';

// block
import SearchButton from '../button.search';

// element
import { Text } from '../../../elements/Text';

export default {
  component: SearchButton,
  title: 'Button/Search',
  excludeStories: /.*Data$/,
};

const buttonData = {
  children: <Text>Search</Text>,
};

const actionsData = {
  onPress: action('onPress'),
};

export const Small = () => {
  return <SearchButton sm {...buttonData} {...actionsData} />;
};

export const Medium = () => {
  return <SearchButton md {...buttonData} {...actionsData} />;
};

export const Large = () => {
  return <SearchButton lg {...buttonData} {...actionsData} />;
};
