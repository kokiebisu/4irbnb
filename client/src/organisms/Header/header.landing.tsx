import React from 'react';
import theme from 'styled-theming';
import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';
import { Text, Box, Icon } from 'atoms';
import { CustomButton } from 'molecules/Button';
import { colors, sizes } from 'styles';

const Left = styled(Box)``;

const Middle = styled(Box)``;

const Right = styled(Box)``;

export default ({ fillColor, ...props }) => {
  return (
    <Box>
      <Left>
        <Icon name='NoColorLogo' fillColor={fillColor} />
      </Left>
      <Middle>
        <Text>header</Text>
      </Middle>
      <Right></Right>
    </Box>
  );
};
