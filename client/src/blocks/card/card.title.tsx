import React from 'react';
import styled, { css } from 'styled-components';

type CardProps = { children?: React.ReactNode };

export default ({ children, ...props }: CardProps) => {
  return <div {...props}>{children}</div>;
};
