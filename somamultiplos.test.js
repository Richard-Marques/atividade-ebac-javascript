const somarMultiplos = require('./somamultiplos');

test('Soma correta dos múltiplos de 5 ou 7 abaixo de 1000', () => {
  const resultado = somarMultiplos();
  expect(resultado).toBe(156361); 
});
