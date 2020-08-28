import React from 'react';
import theme from 'styled-theming';
import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';
import { Text, Box, Icon } from 'atoms';
import { CustomButton } from 'molecules/Button';
import { colors, sizes } from 'styles';
import { globe, menu } from 'molecules/Button/stories/button.stories';

const fill = theme('mode', {
  light: colors.white,
});

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled(Box)``;

const Middle = styled(Box)`
  display: flex;
`;

const Right = styled(Box)``;

export default () => {
  return (
    <Wrapper>
      <Left>
        <Icon name='NoColorLogo' fillColor={fill} width={102} height={32} />
      </Left>
      <Middle>
        <Text>header</Text>
      </Middle>
      <Right>
        <CustomButton type='globe' onPress={() => console.log('pressed')} />
        <CustomButton type='menu' onPress={() => console.log('pressed')} />
      </Right>
    </Wrapper>
  );
};
