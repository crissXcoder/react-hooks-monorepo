import { useRef, useEffect } from 'react';

export function useAutoFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // Empty dependency array ensures this runs only on mount

  return { inputRef };
}