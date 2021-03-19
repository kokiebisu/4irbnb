/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { $INPUT } from '../constant/appearance';

const TextAreaInput: React.FC<{
  value?: string;
  handleChange?: () => void;
  limit?: number;
}> = ({ value = null, handleChange, limit = 500 }) => {
  const [inputValue, setInputValue] = useState('');
  const [active, setActive] = useState(false);

  const handleDisplayingValue = (e) => {
    if (typeof value === 'string' && handleChange) {
      return handleChange();
    }
    setInputValue(e.target.value);
  };

  const displayingValue = typeof value === 'string' ? value : inputValue;

  const renderBorder = () => {
    const mixin = (borderColor) => {
      return {
        border: '1px solid',
        borderColor,
        transition: '0.4s border-color',
      };
    };
    if (displayingValue.length >= limit) {
      return {
        ...mixin('red.400'),
      };
    }
    if (active) {
      return {
        '&:focus': {
          ...mixin('cyan.800'),
        },
      };
    }
    return '';
  };

  const renderBackground = () => {
    const mixin = (bg) => {
      return {
        transition: '0.4s all',
        bg,
      };
    };
    if (displayingValue.length >= limit) {
      return {
        ...mixin('red.50'),
      };
    }
    if (active) {
      return {
        ...mixin('white'),
      };
    }
    return '';
  };

  const renderColor = () => {
    const mixin = (color) => {
      return {
        color,
        transition: '0.4s all',
      };
    };
    if (displayingValue.length >= limit) {
      return {
        ...mixin('red.400'),
      };
    }
    return {
      ...mixin('cyan.800'),
    };
  };

  return (
    <div>
      <div css={{ minHeight: 300, position: 'relative', width: '100%' }}>
        <textarea
          spellCheck
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onChange={handleDisplayingValue}
          css={{
            position: 'relative',
            fontWeight: 300,
            border: '1px solid',
            borderColor: 'grey.300',
            borderRadius: 6,
            fontSize: 15,
            color: 'grey.700',
            height: '100%',
            width: '100%',
            padding: 12,
            transition: 'all 0.4s ease-out',
            outline: 'none',
            resize: 'vertical',
            minHeight: 300,
          }}
          sx={{
            ...renderBorder(),
            ...renderBackground(),
          }}
        ></textarea>

        <div css={{ position: 'absolute', bottom: 15, right: 15 }}>
          <h3 css={{ fontSize: 12 }} sx={{ ...renderColor() }}>
            {limit - displayingValue.length}
          </h3>
        </div>
      </div>
      {displayingValue.length >= limit && (
        <div>
          <h3 css={{ fontSize: 14 }} sx={{ color: 'red.400' }}>
            Please shorten your description to {limit} characters or less.
          </h3>
        </div>
      )}
    </div>
  );
};

export const textarea = (props) => {
  return {
    [$INPUT.textarea]: {
      component: <TextAreaInput {...props} />,
      css: {},
    },
  };
};
