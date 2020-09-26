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

export interface ListProps extends ElementProps, StyledProps {}

export const List: React.FC<ListProps> = ({ ...props }) => {
  return <Element {...props} />;
};
