function calcular() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("operador").value;
  let resultado;
  if (op === "+") resultado = n1 + n2;
  else if (op === "-") resultado = n1 - n2;
  else if (op === "*") resultado = n1 * n2;
  else if (op === "/") {
    resultado = n2 !== 0 ? n1 / n2 : "Erro: divisão por zero!";
  }
  document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}
