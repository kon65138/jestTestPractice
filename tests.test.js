import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './index.js';

test('does capitalize function work as intended', () => {
  expect(capitalize('miles')).toBe('Miles');
  expect(capitalize('MILES')).toBe('MILES');
  expect(capitalize('bathomilume')).toBe('Bathomilume');
});

test('does reverseString function work as intended', () => {
  expect(reverseString('lmao')).toBe('oaml');
  expect(reverseString('HamIuyH')).toBe('HyuImaH');
  expect(reverseString('7dH2@W')).toBe('W@2Hd7');
});

test('does calculator function work as intended', () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(5, 1)).toBe(4);
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('does caesarCipher function work as intended', () => {
  expect(caesarCipher('HeLLo', -34)).toBe('ZwDDg');
  expect(caesarCipher('Alright, VAMOOSH him now!', 57)).toBe(
    'Fqwnlmy, AFRTTXM mnr stb!',
  );
});

test('does analyzeArray function work as intended', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyzeArray([2, -5, 1, 100, -20])).toEqual({
    average: 15.6,
    min: -20,
    max: 100,
    length: 5,
  });
});
