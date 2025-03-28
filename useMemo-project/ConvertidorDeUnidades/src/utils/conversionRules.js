export const CONVERSION_TYPES = {
    LENGTH: 'length',
    TEMPERATURE: 'temperature',
    WEIGHT: 'weight',
    AREA: 'area',
    VOLUME: 'volume'
  };
  
  export const CONVERSION_RULES = {
    [CONVERSION_TYPES.LENGTH]: {
      km: { 
        m: (val) => val * 1000,
        cm: (val) => val * 100000,
        mi: (val) => val * 0.621371,
        ft: (val) => val * 3280.84
      },
      m: {
        km: (val) => val / 1000,
        cm: (val) => val * 100,
        mi: (val) => val * 0.000621371,
        ft: (val) => val * 3.28084
      },
      cm: {
        km: (val) => val / 100000,
        m: (val) => val / 100,
        mi: (val) => val * 0.00000621371,
        ft: (val) => val * 0.0328084
      }
    },
    [CONVERSION_TYPES.TEMPERATURE]: {
      C: {
        F: (val) => (val * 9/5) + 32,
        K: (val) => val + 273.15
      },
      F: {
        C: (val) => (val - 32) * 5/9,
        K: (val) => (val - 32) * 5/9 + 273.15
      },
      K: {
        C: (val) => val - 273.15,
        F: (val) => (val - 273.15) * 9/5 + 32
      }
    },
    [CONVERSION_TYPES.WEIGHT]: {
      kg: {
        g: (val) => val * 1000,
        lb: (val) => val * 2.20462,
        oz: (val) => val * 35.274
      },
      g: {
        kg: (val) => val / 1000,
        lb: (val) => val * 0.00220462,
        oz: (val) => val * 0.035274
      },
      lb: {
        kg: (val) => val * 0.453592,
        g: (val) => val * 453.592,
        oz: (val) => val * 16
      }
    }
  };
  
  // Get available units for a specific conversion type
  export const getAvailableUnits = (type) => {
    return Object.keys(CONVERSION_RULES[type] || {});
  };