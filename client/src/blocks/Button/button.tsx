import React from 'react';
import styled from 'styled-components';

interface Props {
  onPress: () => void;
  className?: string;
}

export const BaseButton: React.FC<Props> = ({
  className,
  onPress,
  children,
}) => {
  return (
    <Button className={className} onClick={onPress}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  background-color: transparent;
  border: 1px solid red;
  color: red;
`;
