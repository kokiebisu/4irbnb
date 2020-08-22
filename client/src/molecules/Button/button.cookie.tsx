import React from 'react';
import styled, { css } from 'styled-components';
import { Button, Text } from 'atoms';
import { sizes } from 'styles';
import { CustomProps } from 'molecules/Button';

const Wrapper = styled(Button)`
  padding: 14px 20px;
  font-size: 16px;
  letter-spacing: 1.1;
  font-weight: 300;
  white-space: nowrap;
  min-width: none;
  margin-top: 25px;
  @media ${sizes.lg} {
    min-width: 125px;
    width: 100%;
    margin-top: initial;
  }
`;

export default ({ name = 'cookie', ...props }: CustomProps) => {
  return (
    <Wrapper {...props}>
      <Text>{name}</Text>
    </Wrapper>
  );
};
