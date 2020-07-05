import React from 'react';
import { Search } from '.';
import styled from 'styled-components';

interface Props {
  name: string;
  styles: any;
}

interface WrapperProps {
  styles: any;
}

const items: any = {
  search: Search,
};

const Wrapper = styled.div<WrapperProps>`
  ${({ styles }) => styles}
`;

export const Icon: React.FC<Props> = ({ name, ...props }) => {
  const Component: any = items[name];

  return (
    <Wrapper {...props}>
      <Component />
    </Wrapper>
  );
};
