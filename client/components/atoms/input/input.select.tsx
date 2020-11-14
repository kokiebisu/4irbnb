import React from 'react';

/**
 * Renders the select input component
 * @param category
 * @param placeholder
 * @param handleChange
 * @param handleValue
 */
export const SelectInput = ({
  category,
  placeholder,
  handleChange,
  handleValue,
}) => {
  return (
    <div>
      <label htmlFor={category}>{placeholder}</label>
      <input
        id={category}
        name={category}
        type={category}
        onChange={handleChange}
        value={handleValue}
      />
    </div>
  );
};
