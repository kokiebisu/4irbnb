import React from 'react';
import { css } from 'styled-components';
import { Icon, Button } from 'atoms';
import { Flex } from 'layout';
import { colors } from 'styles';
import { ButtonProps } from 'molecules/Button';
import theme from 'styled-theming';
import { lighten } from 'polished';

export default ({ name, ...props }: ButtonProps) => {
  return (
    <Button styles={extend.wrapper} {...props}>
      <Flex alignCenter>
        <Icon styles={extend.icon.bars} name='Bars' />
        <Icon styles={extend.icon.avatar} name='Avatar' />
      </Flex>
    </Button>
  );
};

const background = theme('mode', {
  light: colors.white,
});

const gray = theme('mode', {
  light: colors.gray,
});

const lightgray = theme('mode', {
  light: lighten(0.4, colors.gray),
});

const extend = {
  wrapper: css`
    background-color: ${background};
    border-radius: 24px;
    padding: 5px 6px 5px 12px;
    transition: 0.2s ease-in;
    border: 1px solid ${lightgray};
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    }
  `,
  icon: {
    bars: css`
      margin-right: 12px;
      height: 15px;
      width: 17px;
      svg {
        width: 100%;
        height: 100%;
        path {
          fill: ${gray};
        }
      }
    `,
    avatar: css`
      height: 32px;
      width: 32px;
      svg {
        height: 100%;
        width: 100%;
        path {
          fill: ${gray};
        }
      }
    `,
  },
};
