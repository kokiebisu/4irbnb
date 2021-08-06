import { useAddressInputAppearance } from "./appearance";

export interface AddressInputTemplateProps {
  onChange: (e: any) => void;
  value?: any;
  direction?: "top" | "bottom";
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
export const AddressInputTemplate: React.FC<AddressInputTemplateProps> = ({
  onChange,
  value,
  direction,
}) => {
  const { dynamicStyle } = useAddressInputAppearance({ direction });
  return (
    <div className={`h-12 relative py-2 px-5 items-center ${dynamicStyle}`}>
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
