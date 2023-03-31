import operate from '../logic/operate';
import '@testing-library/jest-dom';

describe('operate', () => {
  test('adds two numbers', () => {
    expect(operate('3', '4', '+')).toBe('7');
    expect(operate('-3', '2', '+')).toBe('-1');
  });

  test('subtracts two numbers', () => {
    expect(operate('7', '5', '-')).toBe('2');
    expect(operate('10', '15', '-')).toBe('-5');
  });

  test('multiplies two numbers', () => {
    expect(operate('2', '3', 'x')).toBe('6');
    expect(operate('-4', '3', 'x')).toBe('-12');
  });

  test('divides two numbers', () => {
    expect(operate('10', '2', '÷')).toBe('5');
    expect(operate('-12', '4', '÷')).toBe('-3');
    expect(operate('5', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('calculates modulo of two numbers', () => {
    expect(operate('10', '3', '%')).toBe('1');
    expect(operate('-12', '5', '%')).toBe('-2');
    expect(operate('5', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('throws error for unknown operation', () => {
    expect(() => operate('3', '4', '&')).toThrow("Unknown operation '&'");
  });
});
