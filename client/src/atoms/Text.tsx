import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ElementProps {
  children?: React.ReactNode;
  className?: string;
}

interface StyledProps {
  styles?: any;
}

const Element = styled(motion.p)<StyledProps>`
  margin: 0;
  font-family: 'Airbnb-Cereal';
`;

interface Props extends ElementProps, StyledProps {}

export const Text: React.FC<Props> = ({ children, ...props }) => {
  return <Element {...props}>{children}</Element>;
};
