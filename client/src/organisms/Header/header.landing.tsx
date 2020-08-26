import React from 'react';
import theme from 'styled-theming';
import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';
import { Text, Box, Icon } from 'atoms';
import { CustomButton } from 'molecules/Button';
import { colors, sizes } from 'styles';

const fill = theme('mode', {
  light: colors.white,
});

const Left = styled(Box)``;

const Middle = styled(Box)``;

const Right = styled(Box)``;

export default () => {
  return (
    <Box>
      <Left>
        <Icon name='NoColorLogo' fillColor={fill} />
      </Left>
      <Middle>
        <Text>header</Text>
      </Middle>
      <Right></Right>
    </Box>
  );
};
