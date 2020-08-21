import { css } from 'styled-components';

export const hoverMixin = (number: number) => css`
  &:hover ~ div:nth-child(${number}) {
    width: 1px;
    height: 28px;
    background-color: transparent;
  }
`;

export const borderMixin = (
  top: number,
  right: number,
  bottom: number,
  left: number,
  color: string | theme.ThemeSet
) => css`
  border-top: ${top}px solid ${color};
  border-right: ${right}px solid ${color};
  border-bottom: ${bottom}px solid ${color};
  border-left: ${left}px solid ${color};
`;
