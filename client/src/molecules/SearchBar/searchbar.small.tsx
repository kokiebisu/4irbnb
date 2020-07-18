import React from 'react';
import { css } from 'styled-components';
import theme from 'styled-theming';

// layout
import { Flex } from '../../layout/flex';

// element
import { Icon } from '../../atoms/Icon';
import { Box } from '../../atoms/Box';
import { BaseButton } from '../../atoms/Button';
import { Text } from '../../atoms/Text';

// colorpallete
import { colorpallete } from '../../styles/colorpallete';

type SearchBarProps = {
  onPress: () => void;
};

export default ({ ...props }: SearchBarProps) => {
  return (
    <BaseButton styles={extend.wrapper} {...props}>
      <Flex justifyCenter alignCenter>
        <Icon name='search' styles={extend.icon} />
        <Box styles={extend.text}>
          <Text>Add a location</Text>
        </Box>
      </Flex>
    </BaseButton>
  );
};

const primary = theme('mode', {
  light: colorpallete.gray__6,
});

const secondary = theme('mode', {
  light: colorpallete.gray__1,
});

const tertiary = theme('mode', {
  light: colorpallete.red__5,
});

const extend = {
  wrapper: css`
    background-color: transparent;
    border: 1px solid ${secondary};
    height: 50px;
    max-width: 100%;
    min-width: 220px;
    border-radius: 24px;
  `,
  icon: css`
    position: relative;
    top: 2px;
    margin-right: 16px;
    & svg {
      width: 16px;
      height: 16px;
      stroke: ${tertiary};
      & path {
        fill: ${tertiary};
        stroke-width: 2;
      }
    }
  `,
  text: css`
    & p {
      color: ${primary};
      font-family: 'Airbnb-Cereal';
      font-size: 14px;
      font-weight: 700;
    }
  `,
};
