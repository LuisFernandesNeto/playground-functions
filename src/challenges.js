// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ');
  return result;
}

console.log(splitSentence('foguete'));

// Desafio 4

function concatName(string) {
  let array = `${string[string.length - 1]}, ${string[0]}`;
  return array;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  const win = 3 * wins;
  const tie = 1 * ties;
  let sum = win + tie;
  return sum;
}

console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(array) {
  let maxValue = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maxValue) {
      maxValue = array[index];
    }
  }
  let sum = 0;
  for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
    if (maxValue === array[secondIndex]) {
      sum += 1;
    }
  }
  return sum;
}

console.log(highestCount([2, 4, 3, 5, 7, 3, 7, 3]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catMouse1 = Math.abs(cat1 - mouse);
  let catMouse2 = Math.abs(cat2 - mouse);

  if (catMouse1 < catMouse2) {
    return 'cat1';
  } if (catMouse2 < catMouse1) {
    return 'cat2';
  } if (catMouse1 === catMouse2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Usei Math.abs() para resolver essa questão.. encontrei essa solução neste link: https://www.w3schools.com/jsref/jsref_abs.asp

console.log(catAndMouse(12, 6, 6));

// Desafio 8
function fizzBuzz2(array) {
  if (array[index] % 3 === 0 && array[index] % 5 === 0) {
    return 'fizzBuzz';
  } if (array[index] % 5 === 0) {
    return 'buzz';
  } if (array[index] % 3 === 0) {
    return 'fizz';
  } if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
    return 'bug!';
  }
}

function fizzBuzz(array) {
  let array2 = [];
  for (index = 0; index < array.length; index += 1) {
    array2.push(fizzBuzz2(array));
  }
  return array2;
}

console.log(fizzBuzz([9, 25, 15, 7]));

// Desafio 9

function encode(string) {
  let splitString = string.split('');
  for (index = 0; index < splitString.length; index += 1) {
    if (splitString[index] == 'a') {
      splitString[index] = 1;
    } else if (splitString[index] == 'e') {
      splitString[index] = 2;
    } else if (splitString[index] == 'i') {
      splitString[index] = 3;
    } else if (splitString[index] == 'o') {
      splitString[index] = 4;
    } else if (splitString[index] == 'u') {
      splitString[index] = 5;
    }
  }
  let joinString = splitString.join('');
  return joinString;
}

console.log(encode('go Trybe!'));

function decode(string) {
  let splitString = string.split('');
  for (index = 0; index < splitString.length; index += 1) {
    if (splitString[index] == 1) {
      splitString[index] = 'a';
    } else if (splitString[index] == 2) {
      splitString[index] = 'e';
    } else if (splitString[index] == 3) {
      splitString[index] = 'i';
    } else if (splitString[index] == 4) {
      splitString[index] = 'o';
    } else if (splitString[index] == 5) {
      splitString[index] = 'u';
    }
  }
  let joinString = splitString.join('');
  return joinString;
}

console.log(decode('h3 th2r2!'));

// Desafio 10
function techList(array, string) {
  array.sort();
  let array2 = [];
  if (!array.length) {
    return 'Vazio!';
  }
  for (index = 0; index < array.length; index += 1) {
    array2.push({
      tech: array[index],
      name: string,
    });
  }
  return array2;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
