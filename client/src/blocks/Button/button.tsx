import React from 'react';
import styled from 'styled-components';

interface Props {
  children: string;
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
  border-radius: 5px;
  font-size: 18px;
  border: none;
`;
