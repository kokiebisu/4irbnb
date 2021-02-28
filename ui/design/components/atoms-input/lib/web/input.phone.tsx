/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { styleLabel, styleContainer, styleInput } from './styling.text';
import { $INPUT } from '../constant/appearance';

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
const PhoneNumberInput: React.FC<{
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
}> = ({ handleChange, value, direction, errors = false }) => {
  const [fieldActive, setFieldActive] = useState(false);

  const activateField = () => {
    setFieldActive(true);
  };

  const deactivateField = () => {
    setFieldActive(false);
  };

  const renderShape = () => {
    switch (direction) {
      case 'top':
        return {
          borderBottom: '1px solid',
          borderLeft: '1px solid',
          borderRight: '1px solid',
          borderColor: 'grey.400',
          borderBottomRadius: 10,
        };
      case 'bottom':
        return {
          borderTop: '1px solid',
          borderLeft: '1px solid',
          borderRight: '1px solid',
          borderColor: 'grey.400',
          borderTopRadius: 10,
        };
      default:
        return {
          border: '1px solid',
          borderColor: 'grey.400',
          borderRadius: 10,
        };
    }
  };

  return (
    <div
      css={{
        height: 60,
        position: 'relative',
        padding: '6px 12px',
        alignItems: 'center',
        ...renderShape(),
        // ...styleContainer(errors, fieldActive, value),
      }}
    >
      <div
        css={{
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
      >
        <input
          autoFocus={true}
          id="tel"
          name="tel"
          type="text"
          onChange={handleChange}
          value={value}
          onFocus={activateField}
          onBlur={deactivateField}
          css={{
            padding: 0,
            width: '100%',
            display: 'block',
            border: 'none',
            fontWeight: 300,
            '::placeholder': {
              color: 'black',
            },
            position: 'relative',
            top: 0,
            outline: 'none',
            paddingTop: 20,
            fontSize: 16,
            color: 'rgb(104, 104, 104)',
            ...styleInput(errors, fieldActive, value),
          }}
          placeholder={fieldActive ? '090-999-9999' : undefined}
        />
        <label
          htmlFor="tel"
          css={{
            fontSize: 12,
            color: 'grey.600',
            fontWeight: 100,
            transition: 'all 150ms ease-in',
            top: 12,
            // ...styleLabel(errors, fieldActive, value, value),
          }}
        >
          Phone number
        </label>
      </div>
    </div>
  );
};

export const phone = (props) => {
  return {
    [$INPUT.phone]: {
      component: <PhoneNumberInput {...props} />,
      css: {},
    },
  };
};
