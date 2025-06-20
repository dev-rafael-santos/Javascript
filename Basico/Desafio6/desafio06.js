// Gera um número aleatório entre 1 e 10 (inclusive) no início do jogo
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
console.log(`Número secreto gerado: ${numeroSecreto}`);

// Variável para contar quantas tentativas o jogador já fez
let tentativas = 0;

// Função chamada toda vez que o jogador tenta adivinhar o número
function tentar() {
  // Lê o valor digitado pelo usuário e converte para inteiro
  const palpite = parseInt(document.getElementById("palpite").value);
  console.log(`Palpite do usuário: ${palpite}`);

  // Incrementa o número de tentativas
  tentativas++;
  console.log(`Tentativa número: ${tentativas}`);

  // Inicializa a mensagem de resposta
  let msg = "";

  // Verifica se o palpite está correto
  if (palpite === numeroSecreto) {
    msg = `Parabéns! Você acertou em ${tentativas} tentativa(s).`;
    console.log("Resultado: Acertou!");
  } 
  // Verifica se o número secreto é maior
  else if (palpite < numeroSecreto) {
    msg = "Tente um número MAIOR.";
    console.log("Dica: número secreto é MAIOR.");
  } 
  // Verifica se o número secreto é menor
  else if (palpite > numeroSecreto) {
    msg = "Tente um número MENOR.";
    console.log("Dica: número secreto é MENOR.");
  } 
  // Caso o valor digitado não seja um número válido
  else {
    msg = "Digite um número válido.";
    console.log("Erro: valor inválido.");
  }

  // Exibe a mensagem na tela
  document.getElementById("mensagem").innerText = msg;

  // Marca separação visual no console
  console.log("-----------------------------");
}
