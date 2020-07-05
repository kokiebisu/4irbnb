import React from 'react';
import { Search } from '.';
import styled from 'styled-components';

interface Props {
  name: string;
  styles?: any;
}

interface WrapperProps {
  styles: any;
}

const items: any = {
  search: Search,
};

export const Icon: React.FC<Props> = ({ name, styles, ...props }) => {
  const Component: any = items[name];

  const Wrapper = styled.div<WrapperProps>`
    ${styles}
  `;

  return (
    <Wrapper styles={styles} {...props}>
      <Component />
    </Wrapper>
  );
};
