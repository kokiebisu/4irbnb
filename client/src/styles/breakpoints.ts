import { css } from 'styled-components';

const screen = {
  sm: 576,
  md: 768,
  lg: 992,
};

export const sizes = {
  sm: `(min-width: ${screen.sm})`,
  md: `(min-width: ${screen.md})`,
  lg: `(min-width: ${screen.lg})`,
};
