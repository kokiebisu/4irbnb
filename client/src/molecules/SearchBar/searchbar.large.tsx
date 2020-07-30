import React from 'react';
import { css } from 'styled-components';
import theme from 'styled-theming';

// color
import { colors } from 'styles';

// layout
import { Flex } from 'layout';

// atoms
import { Box, Button, Icon, Text } from 'atoms';

type SearchBarProps = {
  onPress: () => void;
};

export default ({ ...props }: SearchBarProps) => {
  return (
    <Button styles={extend.wrapper} {...props}>
      <Flex alignCenter>
        <Icon name='Search' styles={extend.icon} />
        <Box styles={extend.text}>
          <Text>Where are you going?</Text>
        </Box>
      </Flex>
    </Button>
  );
};

const primary = theme('mode', {
  light: colors.gray__5,
});

const secondary = theme('mode', {
  light: colors.gray__7,
});

const extend = {
  wrapper: css`
    background-color: transparent;
    box-shadow: rgb(0, 0, 0, 0.15) 0px 5px 12px;
    height: 50px;
    width: 100%;
    padding: 0 10px 0 18px;
    border-radius: 24px;
  `,
  icon: css`
    position: relative;
    top: 2px;
    margin-right: 16px;
    & svg {
      width: 16px;
      height: 16px;
      stroke: ${secondary};
      & path {
        fill: ${secondary};
        stroke-width: 2;
      }
    }
  `,
  text: css`
    & p {
      color: ${primary};
      font-size: 16px;
      font-weight: 500;
    }
  `,
};
