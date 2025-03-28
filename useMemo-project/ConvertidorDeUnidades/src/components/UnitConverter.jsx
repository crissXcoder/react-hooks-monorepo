import React from 'react';
import { useUnitConverter } from '../hooks/useUnitConverter';
import { ConversionHistory } from './ConversionHistory';
import { CONVERSION_TYPES, getAvailableUnits } from '../utils/conversionRules';
import '../styles/UnitConverter.css';

export function UnitConverter() {
  const {
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
  } = useUnitConverter();

  const handleConversionTypeChange = (e) => {
    const newType = e.target.value;
    setConversionType(newType);
    
    // Reset units when changing conversion type
    const availableUnits = getAvailableUnits(newType);
    setFromUnit(availableUnits[0]);
    setToUnit(availableUnits[1]);
  };

  return (
    <div className="unit-converter-container">
      <div className="converter-card">
        <h1>Universal Unit Converter</h1>
        
        {/* Conversion Type Selector */}
        <div className="conversion-type-selector">
          <select 
            value={conversionType} 
            onChange={handleConversionTypeChange}
          >
            {Object.values(CONVERSION_TYPES).map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Conversion Inputs */}
        <div className="conversion-inputs">
          <div className="input-group">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter value"
            />
            <select 
              value={fromUnit} 
              onChange={(e) => setFromUnit(e.target.value)}
            >
              {getAvailableUnits(conversionType).map(unit => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>

          <div className="swap-icon">↔️</div>

          <div className="input-group">
            <input
              type="text"
              value={convertedValue}
              readOnly
              placeholder="Converted value"
            />
            <select 
              value={toUnit} 
              onChange={(e) => setToUnit(e.target.value)}
            >
              {getAvailableUnits(conversionType).map(unit => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="converter-actions">
          <button 
            onClick={addToHistory}
            disabled={!inputValue}
          >
            Save Conversion
          </button>
        </div>

        {/* Conversion History */}
        <ConversionHistory 
          history={conversionHistory}
          onClear={clearHistory}
        />
      </div>
    </div>
  );
}