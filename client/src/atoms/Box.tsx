import React from 'react';
import { Text } from 'atoms';
import styled from 'styled-components';
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

export const Box: React.FC<Props> = ({
  children = <Text>Box</Text>,
  ...props
}) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};
