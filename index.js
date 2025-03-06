function capitalize(string) {
  let arr = string.split('');
  arr[0] = arr[0].toUpperCase();
  return arr.join('');
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
};

function caesarCipher(string, shiftFactor) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  return string
    .split('')
    .map((character) => {
      if (!alphabet.includes(character.toLowerCase())) return character;
      let ogLetrIndx = alphabet.indexOf(character.toLowerCase());
      let shiftedLetrIndx = ogLetrIndx + shiftFactor;
      let encodedLetrIndx = 0;
      encodedLetrIndx = shiftedLetrIndx;
      while (encodedLetrIndx > 25) {
        encodedLetrIndx -= 26;
      }
      while (encodedLetrIndx < 0) {
        encodedLetrIndx += 26;
      }
      if (character === character.toUpperCase()) {
        return alphabet[encodedLetrIndx].toUpperCase();
      }
      return alphabet[encodedLetrIndx];
    })
    .join('');
}

function analyzeArray(array) {
  let analysis = { average: 0, min: 0, max: 0, length: 0 };
  analysis.average =
    array.reduce((total, value) => {
      return total + value;
    }) / array.length;
  analysis.min = array.reduce((prev, current) => {
    return prev <= current ? prev : current;
  });
  analysis.max = array.reduce((prev, current) => {
    return prev >= current ? prev : current;
  });
  analysis['length'] = array.length;
  return analysis;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
