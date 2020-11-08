import React from 'react';

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
