import React from 'react';
import styled from 'styled-components';

interface ElementProps {
  className?: string;
}

interface StyledProps {
  styles?: any;
}

const Element = styled.li<StyledProps>`
  ${({ styles }) => styles}
`;

export interface Props extends ElementProps, StyledProps {}

export const List: React.FC<Props> = ({ ...props }) => {
  return <Element {...props} />;
};
