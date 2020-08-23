import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// svgs
import { Search, Globe, ChevronDown, Bars, Avatar, Lock } from 'assets/svg';

interface ElementProps {
  name: string;
  className?: string;
}

interface MapProps {
  [key: string]: () => JSX.Element;
}

const items: MapProps = {
  Search: Search,
  Globe: Globe,
  ChevronDown: ChevronDown,
  Bars: Bars,
  Avatar: Avatar,
  Lock: Lock,
};

const Element = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ({ name, ...props }: ElementProps) => {
  const Component: any = items[name];

  return (
    <Element {...props}>
      <Component />
    </Element>
  );
};
