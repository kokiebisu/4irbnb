import styled, { css } from 'styled-components';

interface FlexProps {
  justifyCenter?: boolean;
  alignCenter?: boolean;
  justifyBetween?: boolean;
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

  ${({ justifyBetween }) =>
    justifyBetween &&
    css`
      justify-content: space-between;
    `}
`;
