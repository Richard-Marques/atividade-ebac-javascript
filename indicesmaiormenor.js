function indicesMaiorMenor(array) {
  let indiceMaior = 0;
  let indiceMenor = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[indiceMaior]) indiceMaior = i;
    if (array[i] < array[indiceMenor]) indiceMenor = i;
  }

  return {
    indiceMaior,
    indiceMenor
  };
}


let numeros = [10, 5, 8, 20, 3];
let resultado = indicesMaiorMenor(numeros);
console.log("Índice do maior:", resultado.indiceMaior); 
console.log("Índice do menor:", resultado.indiceMenor); 
