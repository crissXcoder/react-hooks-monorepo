import React from 'react';
import { getAvailableUnits } from '../utils/conversionRules';

export function UnitSelector({ 
  conversionType, 
  currentUnit, 
  onUnitChange, 
  excludeUnit 
}) {
  // Get available units for the current conversion type
  const availableUnits = getAvailableUnits(conversionType);

  return (
    <select 
      value={currentUnit} 
      onChange={(e) => onUnitChange(e.target.value)}
    >
      {availableUnits
        .filter(unit => unit !== excludeUnit)
        .map(unit => (
          <option key={unit} value={unit}>
            {unit}
          </option>
        ))
      }
    </select>
  );
}