// Desafio 11
function generatePhoneNumber(array) {
  let sum = 0;

  for (let index = 0; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
      if (array[index] === array[secondIndex]) {
        sum += 1;
      }

      if (array.length !== 11) {
        return 'Array com tamanho incorreto.';
      } if (array[index] < 0 || array[index] > 9 || sum >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    array.splice(0, 0, '(');
    array.splice(3, 0, ')');
    array.splice(9, 0, '-');

    return array.join('');
  }
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) return false;
  if (lineB > lineA + lineC || lineB < Math.abs(lineA - lineC)) return false;
  if (lineC > lineB + lineC || lineC < Math.abs(lineB - lineA)) return false;

  return true;
}

console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string) {
  let number = string.match(/\d+/g);
  let sum = 0;
  for (let index = 0; index < number.length; index += 1) {
    sum += parseInt(number[index]);
  }

  if (number == '1') {
    return `${number} copo de água`;
  }
  return `${sum} copos de água`;
}

console.log(hydrate('2 cachaça, 8 cervejas e 3 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
