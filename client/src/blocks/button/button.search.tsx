import React from 'react';
import styled, { css } from 'styled-components';

// breakpoints
import { sizes } from '../../styles/breakpoints';

// svg
import { Icon } from '../../assets/svg/icon';

// block
import BaseButton from './button';

// element
import { Text } from '../../elements/Text';

// interface
import { ButtonProps } from './interface';

export default ({ title, ...props }: ButtonProps) => {
  return (
    <BaseButton styles={button} {...props}>
      <Wrapper>
        <Icon styles={icon} name='search' />
        {text && <Text styles={text}>{title}</Text>}
      </Wrapper>
    </BaseButton>
  );
};

const button = css`
  background: -webkit-linear-gradient(
    right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  border: none;
  color: white;
`;

const Wrapper = styled.div`
  display: block;
  @media ${sizes.sm} {
    display: flex;
    align-items: center;
  }
`;

const icon = css`
  position: relative;
  top: 1.5px;

  & svg {
    width: 14px;
    height: 14px;
    path {
      fill: white;
    }
  }
`;

const text = css`
  display: none;
  font-size: 15px;
  letter-spacing: 0.5px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif !important;
  font-weight: 400;
  padding-left: 7px;

  @media ${sizes.sm} {
    display: block;
  }
`;
