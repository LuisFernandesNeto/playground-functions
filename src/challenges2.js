// Desafio 11
function generatePhoneNumber(array) {
  let sum = 0;

  for (index = 0; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
      if (array[index] === array[secondIndex]) {
        sum += 1;
      }

      if (array.length !== 11) {
        return "Array com tamanho incorreto.";
      } else if (array[index] < 0 || array[index] > 9 || sum >= 3) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
    array.splice(0, 0, '(',);
    array.splice(3, 0, ')',);
    array.splice(9, 0, '-',);

    return array.join('');
  }
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
