// Função para exibir uma saudação personalizada com base no nome digitado
function saudar() {
  // Obtém o valor digitado no campo com id="nome"
  const nome = document.getElementById("nome").value;
  console.log(`Nome digitado: ${nome}`);
  // Cria a mensagem de saudação usando template string
  const mensagem = `Olá, ${nome}! Seja bem-vindo(a)!`;
  console.log(`Mensagem gerada: ${mensagem}`);
  // Exibe a mensagem na página no elemento com id="mensagem"
  document.getElementById("mensagem").innerText = mensagem;
  // Indica no console que o processo foi concluído
  console.log("Saudação exibida com sucesso.\n------------------------");
}
