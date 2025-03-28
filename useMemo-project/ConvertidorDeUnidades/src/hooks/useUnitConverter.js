import { useState, useMemo } from 'react';
import { CONVERSION_TYPES, CONVERSION_RULES } from '../utils/conversionRules';
import { formatNumber } from '../utils/formatNumber';

export function useUnitConverter() {
  const [conversionType, setConversionType] = useState(CONVERSION_TYPES.LENGTH);
  const [fromUnit, setFromUnit] = useState('km');
  const [toUnit, setToUnit] = useState('m');
  const [inputValue, setInputValue] = useState('');
  const [conversionHistory, setConversionHistory] = useState([]);

  // Memoized conversion calculation
  const convertedValue = useMemo(() => {
    if (!inputValue) return '';
    
    const numValue = parseFloat(inputValue);
    if (isNaN(numValue)) return 'Invalid Input';

    try {
      const conversionFunction = CONVERSION_RULES[conversionType][fromUnit][toUnit];
      const result = conversionFunction(numValue);
      return formatNumber(result);
    } catch (error) {
      return 'Conversion Not Supported';
    }
  }, [inputValue, fromUnit, toUnit, conversionType]);

  // Add conversion to history
  const addToHistory = () => {
    if (!inputValue || convertedValue === 'Invalid Input') return;

    const newEntry = {
      id: Date.now(),
      type: conversionType,
      from: {
        value: inputValue,
        unit: fromUnit
      },
      to: {
        value: convertedValue,
        unit: toUnit
      }
    };

    setConversionHistory(prev => [newEntry, ...prev].slice(0, 10));
  };

  // Clear conversion history
  const clearHistory = () => {
    setConversionHistory([]);
  };

  return {
    conversionType,
    setConversionType,
    fromUnit,
    setFromUnit,
    toUnit,
    setToUnit,
    inputValue,
    setInputValue,
    convertedValue,
    conversionHistory,
    addToHistory,
    clearHistory
  };
}