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

export default ({ children, ...props }: ElementProps) => {
  return <motion.div {...props}>{children}</motion.div>;
};
