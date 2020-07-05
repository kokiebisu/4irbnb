import React from 'react';

import { SearchButton } from '../button.search';

import { action } from '@storybook/addon-actions';
import { Icon } from '../../../assets/svg/icon';
import styled from 'styled-components';

export default {
  component: SearchButton,
  title: 'Button/Search',
  excludeStories: /.*Data$/,
};

const buttonData = {
  children: 'click me',
};

const actionsData = {
  onPress: action('onPress'),
};

export const Small = () => {
  const StyledIcon = styled(Icon)`
    & svg {
      width: 16px;
      height: 16px;
      path {
        fill: white;
      }
    }
  `;
  return (
    <SearchButton size={3} {...buttonData} {...actionsData}>
      <StyledIcon name='search' />
    </SearchButton>
  );
};

export const Medium = () => {
  return <SearchButton size={5} {...buttonData} {...actionsData} />;
};

export const Large = () => {
  return <SearchButton size={7} {...buttonData} {...actionsData} />;
};
