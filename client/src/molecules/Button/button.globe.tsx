import React from 'react';
import { css } from 'styled-components';
import { Icon, Button } from 'atoms';
import { Flex } from 'layout';
import { colors } from 'styles';
import { CustomProps } from 'molecules/Button';
import theme from 'styled-theming';

export default ({ name, ...props }: CustomProps) => {
  return (
    <Button styles={extend.wrapper} {...props}>
      <Flex alignCenter>
        <Icon styles={extend.icon.globe} name='Globe' />
        <Icon styles={extend.icon.arrow} name='ChevronDown' />
      </Flex>
    </Button>
  );
};

const stroke = theme('mode', {
  light: colors.white,
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
