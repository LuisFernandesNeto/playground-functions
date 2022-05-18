// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ', 9);
  return result;
}

console.log(splitSentence('Foguete'));

// Desafio 4

function concatName(string) {
  let array = string[string.length-1] + ", " + string[0];
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

console.log(footballPoints(0,0));

// Desafio 6
function highestCount(array) {
  let maxValue = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if(array[index] > maxValue) {
      maxValue = array[index];
    }
  }
  let sum = 0;
  for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
    if (maxValue == array[secondIndex]) {
      sum += 1;
    }
  }
  return sum;
}

console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catMouse1 = Math.abs(cat1 - mouse);
  let catMouse2 = Math.abs(cat2 - mouse);
  
  if (catMouse1 < catMouse2) {
    return 'cat1';
  } else if (catMouse2 < catMouse1) {
    return 'cat2';
  } else if (catMouse1 == catMouse2) {
    return 'os gatos trombam e o rato foge';
  }
}

console.log(catAndMouse(12,6,5));

// Desafio 8
function fizzBuzz2(array) {
  if (array[index] % 3 == 0 && array[index] % 5 == 0) {
    return 'fizzBuzz';
  } else if (array[index] % 5 == 0 ) {
    return 'buzz';
  } else if (array[index] % 3 == 0) {
  return 'fizz';
  } else if (array[index] % 3 != 0 && array[index] % 5 != 0) {
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

console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

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
