import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AnimationInterface } from 'interface/animation';

interface ElementProps extends AnimationInterface {
  children?: React.ReactNode;
  styles?: any;
  layout?: any;
  className?: string;
}

interface StyledProps {
  styles?: any;
}

const Element = styled(motion.div)<StyledProps>`
  ${({ styles }) => styles}
`;

export default ({ children, ...props }: ElementProps) => {
  return <Element {...props}>{children}</Element>;
};
