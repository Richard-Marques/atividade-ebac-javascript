const indicesMaiorMenor = require('./indicesmaiormenor');

test('Deve retornar os índices do maior e menor valor', () => {
  const array = [5, 3, 10, 1, 8];
  const resultado = indicesMaiorMenor(array);

  expect(resultado.maior).toBe(2); // 10 está no índice 2
  expect(resultado.menor).toBe(3); // 1 está no índice 3
});

test('Deve funcionar com array pequeno', () => {
  const array = [9, 2];
  const resultado = indicesMaiorMenor(array);

  expect(resultado.maior).toBe(0);
  expect(resultado.menor).toBe(1);
});