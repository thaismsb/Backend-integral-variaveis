let raio = 2, altura = 6, aBases, aLado, aTotal;

aBases = 2 * Math.PI * Math.pow(raio,2);
aLado = 2 * Math.PI * raio * altura;
aTotal= aBases + aLado;

console.log(`A área total do cilindro é ${aTotal.toFixed(2)} `)