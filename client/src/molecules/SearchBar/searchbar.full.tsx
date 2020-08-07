import React from 'react';
import { css } from 'styled-components';
import theme from 'styled-theming';
import { darken } from 'polished';
import { colors } from 'styles';
import { Flex } from 'layout';
import { Box, Button, Icon, Text } from 'atoms';
import {CustomButton} from 'molecules/Button'

type SearchBarProps = {
  onPress: () => void;
};

export default ({ ...props }: SearchBarProps) => {
  return (
    <Box styles={extend.wrapper}>
        <Button></Button>
         <Button></Button>
          <Button></Button>
            <Button></Button>
            <CustomButton type='search' />
    </Box>
  );
};

const primary = theme('mode', {
  light: colors.gray,
});

const secondary = theme('mode', {
  light: darken(0.7, colors.gray),
});

const extend = {
  wrapper: css`
  background-color: blue;
    width: 820px;
    padding: 9px 0;
    border-radius: 50px;
  `,
 
};
