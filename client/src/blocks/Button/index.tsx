import React from 'react';
import styled, { css } from 'styled-components';
import { rgba, lighten } from 'polished';

interface Props {
  styles: any;
}

const BaseButton: React.FC<Props> = ({ styles, children }) => {
  return <button {...css(styles.button)}>{children}</button>;
};

export default BaseButton;
