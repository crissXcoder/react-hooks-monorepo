export const formatNumber = (number, precision = 4) => {
    // Handle special cases
    if (number === 0) return '0';
    if (isNaN(number)) return 'Invalid';
    
    // Determine if scientific notation is needed
    const abs = Math.abs(number);
    if (abs < 0.0001 || abs > 1000000) {
      return number.toExponential(precision);
    }
    
    // Standard formatting
    return number.toFixed(precision).replace(/\.?0+$/, '');
  };