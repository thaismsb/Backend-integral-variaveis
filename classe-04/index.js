let tfJuros = 12.5 , tempo = 5 , capital = 1000, montante;

tfJuros= tfJuros/100;

taxaetempo = Math.pow(tfJuros + 1 , tempo);

montante = capital * taxaetempo;

console.log(montante.toFixed(2));