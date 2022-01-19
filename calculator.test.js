const Calculator = require('./calculator.js');

describe('Addition test ', () => {
  it('Add valid numbers', () => {
    const calcClass = new Calculator(1, -3);
    expect(calcClass.add()).toBe(-2);
  });
  it('Add valid numbers', () => {
    const calcClass = new Calculator(1, -(-3));
    expect(calcClass.add()).toBe(4);
  });
  it('Invalid numbers', () => {
    const calcClass = new Calculator(1, '-3');
    expect(() => calcClass.add()).toThrowError(Error);
  });
  it('Missing numbers', () => {
    const calcClass = new Calculator(1);
    expect(() => calcClass.add()).toThrowError(Error);
  });
});

describe('Substraction test ', () => {
  it('Substract valid numbers', () => {
    const calcClass = new Calculator(10, 30);
    expect(calcClass.substract()).toBe(-20);
  });
  it('Invalid numbers', () => {
    const calcClass = new Calculator(10, '30');
    expect(() => calcClass.substract()).toThrowError(Error);
  });
  it('Missing numbers', () => {
    const calcClass = new Calculator(10);
    expect(() => calcClass.substract()).toThrowError(Error);
  });
});

describe('Multiplication test ', () => {
  it('Multiply valid numbers', () => {
    const calcClass = new Calculator(20, 2);
    expect(calcClass.multiply()).toBe(40);
  });
  it('Invalid numbers', () => {
    const calcClass = new Calculator(20, '2');
    expect(() => calcClass.multiply()).toThrowError(Error);
  });
  it('Missing numbers', () => {
    const calcClass = new Calculator(20);
    expect(() => calcClass.multiply()).toThrowError(Error);
  });
});

describe('Division test ', () => {
  it('Divide valid numbers', () => {
    const calcClass = new Calculator(16, 2);
    expect(calcClass.divide()).toBe(8);
  });
  it('Divide by zero', () => {
    const calcClass = new Calculator(16, 0);
    expect(() => calcClass.divide()).toThrowError(Error);
  });
  it('Invalid numbers', () => {
    const calcClass = new Calculator(16, '2');
    expect(() => calcClass.divide()).toThrowError(Error);
  });
  it('Missing numbers', () => {
    const calcClass = new Calculator(16);
    expect(() => calcClass.divide()).toThrowError(Error);
  });
});