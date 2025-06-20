// Função para calcular o fatorial de um número
function calcularFatorial() {
  // Obtém o número digitado e converte para inteiro
  const n = parseInt(document.getElementById("numero").value);
  console.log(`Número digitado: ${n}`);

  // Verifica se o número é negativo (fatorial não é definido)
  if (n < 0) {
    document.getElementById("resultado").innerText =
      "Fatorial não definido para negativos.";
    console.log("Erro: número negativo, fatorial não definido.");
    return;
  }

  // Inicializa a variável do fatorial com 1
  let fat = 1;

  // Multiplica de 2 até n para calcular o fatorial
  for (let i = 2; i <= n; i++) {
    fat *= i;
    console.log(`i = ${i} → fatorial parcial = ${fat}`);
  }

  // Exibe o resultado final na tela
  document.getElementById("resultado").innerText = `Fatorial de ${n} é ${fat}`;
  console.log(`Resultado final: ${fat}`);
  console.log("------------------------");
}
