function verificarParImpar() {
  const numero = parseInt(document.getElementById("numero").value);
  const resultado = numero % 2 === 0 ? "PAR" : "ÍMPAR";
  document.getElementById(
    "resultado"
  ).innerText = `O número ${numero} é ${resultado}.`;
}
