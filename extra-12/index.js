let txJuros, montante = 90000, capital = 60000, periodos = 24;

txJuros = (Math.pow((montante/capital),(1/periodos)) - 1) * 100;


console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${txJuros.toFixed(3)}%, pois após ${periodos} meses você teve que pagar ${montante} reais.`);