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
function highestCount() {
 /*let array = [];
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) 
    if (array)
  }*/
  
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

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
