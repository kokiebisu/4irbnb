import React from 'react';
import styled, { css } from 'styled-components';
import { Icon, Button, Text, Box } from 'atoms';
import { CustomProps } from 'molecules/Button';

export const Wrapper = styled(Button)`
  background-color: rgb(215, 4, 102);
  border: none;
  padding: 15px 22px;
  color: white;
  border-radius: 8px;
  transition: 0.8s;
  &:hover {
    background-color: #ff385c;
  }
`;

const Content = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  position: relative;
  margin-right: 8px;
  & svg {
    width: 14px;
    height: 14px;
    stroke: white;
    path {
      fill: white;
      stroke-width: 2;
    }
  }
`;

const StyledText = styled(Text)`
  font-weight: 300;
  font-size: 16px;
`;

export default ({ name, ...props }: CustomProps) => {
  return (
    <Wrapper {...props}>
      <Content>
        <StyledIcon name='Search' />
        <StyledText>Search</StyledText>
      </Content>
    </Wrapper>
  );
};
