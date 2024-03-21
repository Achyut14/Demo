const addCommas = require('./addCommas'); 
describe('addCommas', () => {
  test('adds commas to integer numbers', () => {
    expect(addCommas(1234)).toBe('1,234');
    expect(addCommas(1000000)).toBe('1,000,000');
  });

  test('handles negative numbers correctly', () => {
    expect(addCommas(-1234)).toBe('-1,234');
    expect(addCommas(-1000000)).toBe('-1,000,000');
  });

  test('retains and formats decimal parts correctly', () => {
    expect(addCommas(12345.678)).toBe('12,345.678');
    expect(addCommas(-12345.678)).toBe('-12,345.678');
  });

  test('formats numbers without commas correctly', () => {
    expect(addCommas(6)).toBe('6');
    expect(addCommas(-10)).toBe('-10');
  });

  test('works with zero', () => {
    expect(addCommas(0)).toBe('0');
  });
});
