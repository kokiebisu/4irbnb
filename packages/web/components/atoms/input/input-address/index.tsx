import { renderShape } from './logic';

export interface AddressInputProps {
  onChange?: (e: any) => void;
  value?: any;
  direction?: 'top' | 'bottom' | undefined;
}

/**
 * Renders the text input component
 * @param {string} name - Type of input
 * @param {string} placeholder - Placeholder
 * @param handleChange
 * @param {string} value - Current value of the input
 * @param {string} direction - direction in which the input if attached to another
 * @param {string} inputType - Whether if the input is text-based or select-based
 */
export const AddressInput: React.FC<AddressInputProps> = ({
  onChange,
  value,
  direction,
}) => {
  return (
    <div
      className={`h-12 relative py-2 px-5 items-center ${renderShape(
        direction
      )}`}
    >
      <div className="relative h-full w-full flex items-center">
        <input
          autoFocus={true}
          id="address"
          name="address"
          type="text"
          onChange={onChange}
          value={value}
          className="p-0 w-full block border-none text-sm font-thin outline-none"
          placeholder="Address"
        />
      </div>
    </div>
  );
};

export const address = (props) => {
  return {
    address: <AddressInput {...props} />,
  };
};
