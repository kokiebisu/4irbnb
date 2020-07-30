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
      <Flex alignCenter>
        <Icon styles={extend.icon.globe} name='Globe' />
        <Icon styles={extend.icon.arrow} name='BottomArrow' />
      </Flex>
    </BaseButton>
  );
};

const stroke = theme('mode', {
  light: colorpallete.white,
});

const extend = {
  wrapper: css`
    padding: 10px 14px;
    background-color: transparent;
    border-radius: 24px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    &:hover {
      background-color: rgba(190, 190, 190, 0.2);
    }
  `,
  icon: {
    globe: css`
      position: relative;
      top: 50%;
      margin-right: 6px;
      width: 16px;
      height: 16px;
      svg {
        width: 100%;
        path {
          fill: ${stroke};
        }
      }
    `,
    arrow: css`
      width: 10px;
      svg {
        width: 100%;
        polygon {
          fill: ${stroke};
        }
      }
    `,
  },
};
