/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { styleInput, styleLabel, styleContainer } from './styling.text';
import { Button, $BUTTON } from '@nextbnb/atoms-button/dist/bundle.esm.js';
import { $INPUT } from '../constant/appearance';
import { validatePassword } from '@nextbnb/design/helper/validation';

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
const PasswordInput: React.FC<{
  handleChange?: any;
  value?: string;
  direction?: string;
  errors?: boolean;
}> = ({ handleChange, value = null, direction, errors = false }) => {
  const [inputValue, setInputValue] = useState('');
  const [fieldActive, setFieldActive] = useState(false);
  const [hide, setHide] = useState(true);

  const activateField = () => {
    setFieldActive(true);
  };

  const deactivateField = () => {
    setFieldActive(false);
  };

  // const renderShape = () => {
  //   switch (direction) {
  //     case 'top':
  //       return {
  //         borderBottom: '1px solid',
  //         borderLeft: '1px solid',
  //         borderRight: '1px solid',
  //         borderColor: 'grey.400',
  //         borderBottomRadius: 10,
  //       };
  //     case 'bottom':
  //       return {
  //         borderTop: '1px solid',
  //         borderLeft: '1px solid',
  //         borderRight: '1px solid',
  //         borderColor: 'grey.400',
  //         borderTopRadius: 10,
  //       };
  //     default:
  //       return {
  //         border: '1px solid',
  //         borderColor: 'grey.400',
  //         borderRadius: 10,
  //       };
  //   }
  // };

  const handleinputValue = (e) => {
    setInputValue(e.target.value);
  };

  const displayingValue = typeof value === 'string' ? value : inputValue;

  return (
    <div
      css={{
        height: 60,
        position: 'relative',
        padding: '6px 12px',
        display: 'flex',
        alignItems: 'center',
      }}
      sx={{
        ...styleContainer(
          errors,
          fieldActive,
          validatePassword(displayingValue)
        ),
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
          id="password"
          name="password"
          type={hide ? 'password' : 'text'}
          onChange={value ? handleChange : handleinputValue}
          value={displayingValue}
          onFocus={activateField}
          onBlur={deactivateField}
          css={{
            padding: 0,
            width: '100%',
            display: 'block',
            border: 'none',
            fontSize: 16,
            fontWeight: 300,
            position: 'relative',
            top: 0,
            outline: 'none',
            paddingTop: 20,
            color: 'rgb(104, 104, 104)',
          }}
          sx={{
            '::placeholder': {
              color: 'black',
            },
            ...styleInput(
              errors,
              fieldActive,
              validatePassword(displayingValue)
            ),
          }}
          placeholder={fieldActive ? 'Password' : undefined}
        />
        <label
          htmlFor="password"
          sx={{
            ...styleLabel(
              errors,
              fieldActive,
              validatePassword(displayingValue),
              displayingValue
            ),
          }}
        >
          Password
        </label>
      </div>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 18,
        }}
      >
        <Button
          variant={$BUTTON.underline}
          onClick={() => setHide((prevHide) => !prevHide)}
          font={13}
          title={hide ? 'Show' : 'Hide'}
        />
      </div>
    </div>
  );
};

export const password = (props) => {
  return {
    [$INPUT.password]: {
      component: <PasswordInput {...props} />,
      css: {},
    },
  };
};
