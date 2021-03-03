/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { ChevronDown, Globe } from '@nextbnb/design/assets/svg/regular';

export const Content: React.FC<{ kind?: string; inverse?: boolean }> = ({
  kind = 'globe',
  inverse = false,
}) => {
  const kinds = {
    globe: (
      <div>
        <div
          css={{
            alignItems: 'center',
            marginRight: 8,
          }}
        >
          <Globe width={16} fill={inverse ? 'white' : '#363636'} />
        </div>
      </div>
    ),
    host: (
      <h3
        sx={{
          fontSize: '14px',
          ...(inverse ? { color: 'white' } : { color: 'grey.900' }),
        }}
      >
        Become a host
      </h3>
    ),
  };
  return kinds[kind];
};
