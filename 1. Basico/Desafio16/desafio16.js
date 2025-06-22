// Função para verificar se um número é perfeito
function verificarPerfeito() {
  // Obtém o número digitado no input e converte para inteiro
  const numero = parseInt(document.getElementById("numero").value);
  console.log(`Número digitado: ${numero}`);

  // Inicializa a variável que armazenará a soma dos divisores
  let soma = 0;

  // Percorre todos os números de 1 até (numero - 1)
  for (let i = 1; i < numero; i++) {
    // Se o número atual for divisor exato do número digitado
    if (numero % i === 0) {
      soma += i; // Soma o divisor à soma total
      console.log(`Divisor encontrado: ${i}, soma parcial: ${soma}`);
    }
  }

  // Verifica se a soma dos divisores é igual ao número original
  const resultado = soma === numero
    ? "É um número perfeito!"
    : "Não é um número perfeito.";
  console.log(`Resultado: ${resultado}`);

  // Exibe o resultado na interface
  document.getElementById("resultado").innerText = resultado;

  // Marca separação no console
  console.log("------------------------");
}
