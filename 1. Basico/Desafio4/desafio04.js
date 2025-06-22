// Função para verificar se um número é par ou ímpar
function verificarParImpar() {
  // Obtém o número digitado no campo com id="numero" e converte para inteiro
  const numero = parseInt(document.getElementById("numero").value);
  console.log(`Número digitado: ${numero}`);

  // Usa o operador ternário para verificar se é par (resto da divisão por 2 igual a 0)
  const resultado = numero % 2 === 0 ? "PAR" : "ÍMPAR";
  console.log(`Resultado da verificação: ${resultado}`);

  // Exibe a mensagem formatada na tela no elemento com id="resultado"
  document.getElementById("resultado").innerText = `O número ${numero} é ${resultado}.`;

  // Mensagem final no console
  console.log("Verificação de par/ímpar concluída.\n------------------------");
}
