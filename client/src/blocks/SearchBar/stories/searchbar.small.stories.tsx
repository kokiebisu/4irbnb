import React from 'react';
import { SearchBar } from '../searchbar';

export default {
  component: SearchBar,
  title: 'Blocks/SearchBar',
  excludeStories: /.*Data$/,
};

export const Mobile = () => {
  return <SearchBar type='mobile' onPress={() => console.log('hello!')} />;
};

export const Normal = () => {
  return <SearchBar type='normal' onPress={() => console.log('hello!')} />;
};
