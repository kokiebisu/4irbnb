import styled from 'styled-components';
import { rgba, lighten } from 'polished';

// Particles
import Text from './Text';
import Icon from './Icon';

const Button: any = styled.button`
  background-color: #7d7d7d;
  border-radius: 2px;
  border: solid 1px transparent;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  outline: none;
  transition: all 200ms ease;

  &:hover,
  &:focus {
    background-color: ${lighten(0.05, '#7D7D7D')};
    box-shadow: 0 8px 8px 0 ${rgba('#646464', 0.4)};
  }
`;

Button.Text = Text;
Button.Icon = Icon;

export default Button;
