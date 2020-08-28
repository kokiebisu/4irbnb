import React from 'react';
import styled from 'styled-components';
import { Box } from 'atoms';
import { motion } from 'framer-motion';

interface ElementProps {
  children?: React.ReactNode;
  layout?: any;
  className?: string;
}

interface StyledProps {
  styles?: any;
}

interface Props extends ElementProps, StyledProps {}

const Wrapper = styled(motion.div)<StyledProps>`
  ${({ styles }) => styles}
`;

export default ({ children, ...props }: Props) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};
