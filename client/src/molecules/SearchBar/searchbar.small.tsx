import React from 'react';
import { css } from 'styled-components';
import theme from 'styled-theming';

// layout
import { Flex } from 'layout/flex';

// element
import { Icon } from 'atoms/Icon';
import { Box } from 'atoms/Box';
import { BaseButton } from 'atoms/Button';
import { Text } from 'atoms/Text';

// colors
import { colorpallete } from 'styles/colorpallete';

type SearchBarProps = {
  onPress: () => void;
};

export default ({ ...props }: SearchBarProps) => {
  return (
    <BaseButton styles={extend.wrapper} {...props}>
      <Flex justifyBetween alignCenter>
        <Box styles={extend.text}>
          <Text>Start your search</Text>
        </Box>
        <Box styles={extend.iconwrapper}>
          <Icon name='search' styles={extend.icon} />
        </Box>
      </Flex>
    </BaseButton>
  );
};

const primary = theme('mode', {
  light: [colorpallete.pink__4, colorpallete.pink__5, colorpallete.pink__6],
});

const secondary = theme('mode', {
  light: colorpallete.gray__1,
});

const white = theme('mode', {
  light: colorpallete.white,
});

const extend = {
  wrapper: css`
    background-color: transparent;
    border: 1px solid ${secondary};
    height: 50px;
    max-width: 100%;
    padding: 0 7px 0 18px;
    min-width: 220px;
    border-radius: 24px;
  `,
  iconwrapper: css`
    width: 32px;
    height: 32px;
    background: -webkit-linear-gradient(
      right,
      rgb(230, 30, 77) 0%,
      rgb(227, 28, 95) 50%,
      rgb(215, 4, 102) 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  `,
  icon: css`
    position: relative;

    & svg {
      width: 12px;
      height: 12px;
      stroke: ${white};
      & path {
        fill: ${white};
        stroke-width: 2;
      }
    }
  `,
  text: css`
    & p {
      color: ${primary};
      font-family: 'Airbnb-Cereal';
      font-size: 14px;
      font-weight: 500;
    }
  `,
};
