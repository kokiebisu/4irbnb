import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ElementProps {
  children?: React.ReactNode;
}

interface StyledProps {
  styles?: any;
}

const Element = styled(motion.p)<StyledProps>`
  margin: 0;
  font-family: 'Airbnb-Cereal';
  ${({ styles }) => styles}
`;

interface TextProps extends ElementProps, StyledProps {}

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return <Element {...props}>{children}</Element>;
};
