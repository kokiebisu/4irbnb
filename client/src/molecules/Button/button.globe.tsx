import React from 'react';
import { css } from 'styled-components';

// atoms
import { Icon } from 'atoms/Icon';
import { BaseButton } from 'atoms/Button';
import { Box } from 'atoms/Box';

import { Flex } from 'layout/flex';

// type
import { ButtonProps } from 'molecules/Button/button';
import theme from 'styled-theming';

import { colorpallete } from 'styles/colorpallete';

export default ({ name, ...props }: ButtonProps) => {
  return (
    <BaseButton styles={extend.wrapper} {...props}>
      <Box styles={extend.content}>
        <Flex>
          <Icon styles={extend.icon.globe} name='Globe' />
          <Icon styles={extend.icon.arrow} name='BottomArrow' />
        </Flex>
      </Box>
    </BaseButton>
  );
};

const stroke = theme('mode', {
  light: colorpallete.white,
});

const extend = {
  wrapper: css`
    padding: 15px;
    background-color: transparent;
    border-radius: 40px;
  `,
  content: css``,
  icon: {
    globe: css`
      svg {
        width: 16px;
        height: 16px;
        path {
          fill: ${stroke};
        }
      }
    `,
    arrow: css`
      svg {
        width: 15px;
        height: 15px;
        path {
          fill: red;
        }
      }
    `,
  },
};
