let valorproduto = 129.99, valordesejado = 80,  valorDesconto = 0, porcentDesconto = 0;

valorDesconto = valorproduto - valordesejado;

console.log("| " + valorproduto +  " | " + " 100" + "            |")
console.log("|"+":------:"+ "|" + ":---------------:"+"|")
console.log("| " + valorDesconto.toFixed(2) +  "  | " + " porcentDesconto" + "|")

porcentDesconto = (valorDesconto * 100) / valorproduto;

console.log(porcentDesconto.toFixed(2));