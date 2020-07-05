import { BaseButton } from './button';
import styled, { css } from 'styled-components';

export const PrimaryButton = styled(BaseButton)`
  background: -webkit-linear-gradient(
    right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  border: none;
  color: white;
`;
