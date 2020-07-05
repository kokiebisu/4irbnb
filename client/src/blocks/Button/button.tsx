import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  onPress: () => void;
  className?: string;
}

export const BaseButton: React.FC<Props> = ({ className, onPress, title }) => {
  return (
    <Button className={className} onClick={onPress}>
      {title}
    </Button>
  );
};

const Button = styled.button`
  background-color: transparent;
  border: 1px solid red;
  color: red;
`;
