import React from 'react';

// Component
import { BaseButton } from './button';
import { PrimaryButton } from './button.primary';

export default {
  title: 'Design System/Blocks/Buttons',
};

export const Base = () => {
  return (
    <BaseButton onPress={() => console.log('base')}>Base BUtton</BaseButton>
  );
};

export const Primary = () => {
  return (
    <PrimaryButton onPress={() => console.log('primary')}>
      Primary Button
    </PrimaryButton>
  );
};
