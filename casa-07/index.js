let P0 = 1000, tempoperc = 100  , qtdepessoas, qtdinfectados , transmissao = 4;

qtdinfectados = P0 * Math.pow(transmissao, (tempoperc / 7));

console.log(qtdinfectados);