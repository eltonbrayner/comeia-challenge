import React from 'react';
import useDebounce from '../../hooks/useDebounce';

export const SearchInput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = React.useState(value);

  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(e) {
    setDisplayValue(e.target.value);
    debouncedChange(e.target.value);
  }

  return (
    <input
      id="search"
      name="search"
      value={displayValue}
      onChange={handleChange}
      type="text"
      placeholder="Nome, CPF ou Profissão"
    />
  );
};
