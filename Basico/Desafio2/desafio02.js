// Função para verificar se a pessoa é maior ou menor de idade
function verificarIdade() {
  // Obtém o nome digitado no campo com id="nome"
  const nome = document.getElementById("nome").value;
  console.log(`Nome digitado: ${nome}`);

  // Obtém a idade digitada no campo com id="idade" e converte para número inteiro
  const idade = parseInt(document.getElementById("idade").value);
  console.log(`Idade digitada: ${idade}`);

  // Inicializa a mensagem que será exibida na tela
  let msg = "";

  // Verifica se é menor de idade
  if (idade < 18) {
    msg = `Olá, ${nome}! Você é menor de idade.`;
    console.log("Resultado: menor de idade");
    
  } else {
    msg = `Olá, ${nome}! Você é maior de idade.`;
    console.log("Resultado: maior de idade");
  }

  // Exibe a mensagem na tela
  document.getElementById("mensagem").innerText = msg;

  // Log final indicando que o processo terminou
  console.log("Verificação concluída.\n------------------------");
}

