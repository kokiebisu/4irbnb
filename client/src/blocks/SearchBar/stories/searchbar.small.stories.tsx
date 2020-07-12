import React from 'react';
import { SearchBar } from '../searchbar';

export default {
  component: SearchBar,
  title: 'Blocks/SearchBar/Mobile',
  excludeStories: /.*Data$/,
};

export const Base = () => {
  return <SearchBar type='mobile' onPress={() => console.log('hello!')} />;
};
