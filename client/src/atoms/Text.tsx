import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AnimationInterface } from 'interface/animation';

interface ElementProps extends AnimationInterface {
  children?: React.ReactNode;
  className?: string;
}

const Element = styled(motion.p)`
  margin: 0;
  font-family: 'Airbnb-Cereal';
`;

export default ({ children, ...props }: ElementProps) => {
  return <Element {...props}>{children}</Element>;
};
