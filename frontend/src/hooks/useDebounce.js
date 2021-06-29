import React from 'react';

export default function useDebounce(fn, time) {
  const timeoutRef = React.useRef(null);

  function debounceFunction(...args) {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, time);
  }

  return debounceFunction;
}
