import React from 'react';
import styled, { css } from 'styled-components';
import { rgba, lighten } from 'polished';

interface Props {
  onPress: () => void;
}

const BaseButton: React.FC<Props> = ({ onPress, children }) => {
  return <Element onClick={onPress}>{children}</Element>;
};

const Element = styled.button`
  background-color: transparent;
  border: 1px solid red;
  color: red;
`;

export default BaseButton;
