/**
 * Formatea un número como moneda
 * @param {number} amount - Monto a formatear
 * @param {string} [locale='es-MX'] - Configuración regional para formateo
 * @param {string} [currency='MXN'] - Tipo de moneda
 * @returns {string} Monto formateado como moneda
 */
export const formatCurrency = (amount, locale = 'es-MX', currency = 'MXN') => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };
  
  /**
   * Formatea una fecha
   * @param {Date} date - Fecha a formatear
   * @param {string} [locale='es-MX'] - Configuración regional para formateo
   * @param {Object} [options] - Opciones de formateo
   * @returns {string} Fecha formateada
   */
  export const formatDate = (
    date, 
    locale = 'es-MX', 
    options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }
  ) => {
    return new Intl.DateTimeFormat(locale, options).format(date);
  };
  
  /**
   * Trunca un texto a una longitud específica
   * @param {string} text - Texto a truncar
   * @param {number} [maxLength=50] - Longitud máxima
   * @returns {string} Texto truncado
   */
  export const truncateText = (text, maxLength = 50) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };
  
  /**
   * Convierte un monto a formato porcentual
   * @param {number} amount - Monto a convertir
   * @param {number} total - Monto total para cálculo de porcentaje
   * @returns {string} Porcentaje formateado
   */
  export const calculatePercentage = (amount, total) => {
    if (total === 0) return '0%';
    const percentage = (amount / total) * 100;
    return `${percentage.toFixed(2)}%`;
  };
  
  /**
   * Genera un color aleatorio basado en una semilla
   * @param {string} seed - Texto semilla para generar color
   * @returns {string} Color hexadecimal
   */
  export const generateColorFromSeed = (seed) => {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const c = (hash & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();
  
    return "#" + "00000".substring(0, 6 - c.length) + c;
  };
  
  /**
   * Agrupa gastos por un campo específico
   * @param {Array} expenses - Lista de gastos
   * @param {string} field - Campo para agrupar
   * @returns {Object} Objeto con gastos agrupados
   */
  export const groupExpensesBy = (expenses, field) => {
    return expenses.reduce((groups, expense) => {
      const key = expense[field];
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(expense);
      return groups;
    }, {});
  };
  
  /**
   * Ordena una lista de gastos
   * @param {Array} expenses - Lista de gastos
   * @param {string} [sortBy='date'] - Campo para ordenar
   * @param {boolean} [ascending=false] - Orden ascendente o descendente
   * @returns {Array} Lista de gastos ordenada
   */
  export const sortExpenses = (
    expenses, 
    sortBy = 'date', 
    ascending = false
  ) => {
    return [...expenses].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return ascending ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return ascending ? 1 : -1;
      return 0;
    });
  };