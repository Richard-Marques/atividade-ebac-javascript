function mdc(a, b) {
  while (b !== 0) {
    let resto = a % b;
    a = b;
    b = resto;
  }
  return a;
}

console.log("MDC de 20 e 8:", mdc(20, 8)); 