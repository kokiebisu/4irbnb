import React from 'react';
import { css } from 'styled-components';
import theme from 'styled-theming';
import { darken } from 'polished';
import { colors } from 'styles';
import { Flex } from 'layout';
import { Box, Button, Icon, Text } from 'atoms';
import { CustomButton } from 'molecules/Button';

type SearchBarProps = {
  onPress: () => void;
};

export default ({ ...props }: SearchBarProps) => {
  return (
    <Box styles={extend.wrapper}>
      <Box styles={extend.options}>
        {/* <Button
          styles={extend.section.wrapper}
          onPress={() => console.log('pressed')}>
          sadf
        </Button>
        <Button
          styles={extend.section.wrapper}
          onPress={() => console.log('pressed')}>
          sadf
        </Button>
        <Button
          styles={extend.section.wrapper}
          onPress={() => console.log('pressed')}>
          sadf
        </Button>
        <Button
          styles={extend.section.wrapper}
          onPress={() => console.log('pressed')}>
          sdaf
        </Button> */}
      </Box>
      <Box styles={extend.button}>
        <CustomButton type='search' onPress={() => console.log('pressed')} />
      </Box>
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
    width: 100%;
    max-width: 850px;
    height: 65px;
    border-radius: 50px;
    display: flex;
    box-shadow: rgb(0, 0, 0, 0.15) 0px 5px 12px;
  `,
  section: {
    wrapper: css`
      height: 100%;
      width: 150px;
      border-radius: 50px;
    `,
  },
  options: css`
    flex: 1 1 0%;
    height: 100%;
  `,
  button: css`
    padding: 8px;
    flex: 0 0 auto;
  `,
};
