import React from 'react';
import styled from 'styled-components';

interface Props {
  className: string;
  onPress: () => void;
}

export const Button: React.FC<Props> = ({ className, onPress, children }) => {
  return (
    <Element className={className} onClick={onPress}>
      {children}
    </Element>
  );
};

const Element = styled.button`
  background-color: transparent;
  border: 1px solid red;
  color: red;
`;
