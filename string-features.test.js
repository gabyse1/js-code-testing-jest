const [stringLength, stringReverse, stringCapitalize] = require('./string-features.js');

it('strings length', () => {
  expect(stringLength('gabrielasa')).toBe(10);
});

it('invalid string length', () => {
  expect(() => stringLength('gabriela sanchez espirilla')).toThrowError(Error);
});

it('string reverse', () => {
  expect(stringReverse('lirbag')).toBe('gabril');
});

describe('string capitalize', () => {
  it('Valid string', () => {
    expect(stringCapitalize('lirbag')).toBe('Lirbag');
  });
  it('Valid mix string letters and numbers', () => {
    expect(stringCapitalize('a201')).toBe('A201');
  });
  it('Valid numeric string', () => {
    expect(stringCapitalize('201')).toBe('201');
  });
  it('Invalid string, integer', () => {
    expect(() => stringCapitalize(201)).toThrowError(Error);
  });
});
