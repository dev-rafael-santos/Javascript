// Função para realizar uma operação matemática entre dois números
function calcular() {
  // Obtém o primeiro número e converte para número decimal (float)
  const n1 = parseFloat(document.getElementById("num1").value);
  console.log(`Número 1: ${n1}`);

  // Obtém o segundo número e converte para número decimal (float)
  const n2 = parseFloat(document.getElementById("num2").value);
  console.log(`Número 2: ${n2}`);

  // Obtém a operação selecionada (+, -, *, /)
  const op = document.getElementById("operador").value;
  console.log(`Operador selecionado: ${op}`);

  // Declara variável para armazenar o resultado
  let resultado;

  // Verifica qual operação foi escolhida e executa o cálculo
  if (op === "+") {
    resultado = n1 + n2;
  } else if (op === "-") {
    resultado = n1 - n2;
  } else if (op === "*") {
    resultado = n1 * n2;
  } else if (op === "/") {
    // Verifica se o divisor é diferente de zero para evitar erro
    resultado = n2 !== 0 ? n1 / n2 : "Erro: divisão por zero!";
  }

  // Exibe o resultado na tela
  document.getElementById("resultado").innerText = `Resultado: ${resultado}`;

  // Mostra o resultado também no console
  console.log(`Resultado do cálculo: ${resultado}`);
  console.log("Cálculo finalizado.\n------------------------");
}
