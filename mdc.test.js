const mdc = require('./mdc');

test('MDC de 20 e 8 deve ser 4', () => {
  expect(mdc(20, 8)).toBe(4);
});