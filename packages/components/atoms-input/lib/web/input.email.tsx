/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'
import { styleInput, styleLabel, styleContainer } from './styling.text'
import { $INPUT } from '../constant/appearance'
import { validateEmail } from '@nextbnb/helper/dist/bundle.cjs'

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param {function} handleChange - Changes the input
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
const EmailInput: React.FC<{
  handleChange?: any
  value?: string
  direction?: string
  errors?: boolean
}> = ({ handleChange, value = null, direction, errors = false }) => {
  const [inputValue, setInputValue] = useState('')
  const [fieldActive, setFieldActive] = useState(false)

  const activateField = () => {
    setFieldActive(true)
  }

  const deactivateField = () => {
    setFieldActive(false)
  }

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
  //         borderColor: 'grey.300',
  //         borderRadius: 10,
  //       };
  //   }
  // };

  const handleinputValue = (e) => {
    setInputValue(e.target.value)
  }

  const displayingValue = typeof value === 'string' ? value : inputValue

  return (
    <div
      css={{
        height: 60,
        position: 'relative',
        padding: '6px 12px',
        display: 'flex',
        alignItems: 'center'
      }}
      sx={{
        ...styleContainer(errors, fieldActive, validateEmail(displayingValue))
      }}
    >
      <div
        css={{
          position: 'relative',
          height: '100%',
          width: '100%'
        }}
      >
        <input
          autoFocus={true}
          id="email"
          name="email"
          type="text"
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
            top: '0',
            outline: 'none',
            paddingTop: 20,
            color: 'rgb(104, 104, 104)'
          }}
          sx={{
            '::placeholder': {
              color: 'black'
            },
            ...styleInput(errors, fieldActive, validateEmail(displayingValue))
          }}
          placeholder={fieldActive ? 'Email' : undefined}
        />
        <label
          htmlFor="email"
          sx={{
            ...styleLabel(
              errors,
              fieldActive,
              validateEmail(displayingValue),
              displayingValue
            )
          }}
        >
          Email
        </label>
      </div>
    </div>
  )
}

export const email = (props) => {
  return {
    [$INPUT.email]: {
      component: <EmailInput {...props} />,
      css: {}
    }
  }
}
