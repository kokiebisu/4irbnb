import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { darken } from 'polished';
import { colors } from 'styles';
import { Box, Button, Icon, Text } from 'atoms';

interface Props {
  extend?: any;
}

export default ({ extend }: Props) => {
  return (
    <Button styles={extend.wrapper} onPress={() => console.log('clicked')}>
      <Box styles={extend.flex}>
        <Icon styles={extend.icon} name='Search' />
        <Text styles={extend.label}>Where are you going?</Text>
      </Box>
    </Button>
  );
};
