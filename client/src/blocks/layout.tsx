import styled, { css } from 'styled-components';

interface FlexProps {
  justifyCenter?: boolean;
  alignCenter?: boolean;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${({ justifyCenter }) =>
    justifyCenter &&
    css`
      justify-content: center;
    `}

  ${({ alignCenter }) =>
    alignCenter &&
    css`
      align-items: center;
    `}
`;
