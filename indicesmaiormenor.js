function indicesMaiorMenor(array) {
  let maiorIndex = 0;
  let menorIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[maiorIndex]) maiorIndex = i;
    if (array[i] < array[menorIndex]) menorIndex = i;
  }

  return { maior: maiorIndex, menor: menorIndex };
}

module.exports = indicesMaiorMenor;