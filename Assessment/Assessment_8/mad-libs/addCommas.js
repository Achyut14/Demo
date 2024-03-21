function addCommas(number) {
    // Convert number to string and determine if it's negative.
    let numberStr = number.toString();
    const isNegative = number < 0;
    if (isNegative) {
      numberStr = numberStr.substring(1); // Remove the negative sign for processing.
    }
  
    // Split the number into integer and decimal parts.
    let [integerPart, decimalPart] = numberStr.split('.');
  
    // Reverse the integer part, add commas, then reverse back.
    integerPart = integerPart.split('').reverse().join('')
      .replace(/(\d{3})(?=\d)/g, '$1,')
      .split('').reverse().join('');
  
    // Construct the final result with decimal part if it exists.
    let result = integerPart + (decimalPart !== undefined ? '.' + decimalPart : '');
  
    // Prefix a negative sign if the number was negative.
    if (isNegative) {
      result = '-' + result;
    }
  
    return result;
  }
  
  module.exports = addCommas;
  