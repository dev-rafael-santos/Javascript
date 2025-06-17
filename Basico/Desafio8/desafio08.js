function contar() {
  const inicio = parseInt(document.getElementById("inicio").value);
  const fim = parseInt(document.getElementById("fim").value);
  let pares = 0,
    impares = 0;

  for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) pares++;
    else impares++;
  }

  document.getElementById(
    "resultado"
  ).innerText = `Entre ${inicio} e ${fim}, há ${pares} número(s) PAR(ES) e ${impares} número(s) ÍMPAR(ES).`;
}
