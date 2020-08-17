import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AnimationMixin } from 'mixins/animation';

interface ElementProps extends AnimationMixin {
  children?: React.ReactNode;
  styles?: any;
}

interface StyledProps {
  styles?: any;
}

const Element = styled(motion.p)<StyledProps>`
  margin: 0;
  font-family: 'Airbnb-Cereal';
  ${({ styles }) => styles}
`;

export default ({ children, ...props }: ElementProps) => {
  return <Element {...props}>{children}</Element>;
};
