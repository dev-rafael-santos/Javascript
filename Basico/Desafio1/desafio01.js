function saudar() {
  const nome = document.getElementById("nome").value;
  const mensagem = `Olá, ${nome}! Seja bem-vindo(a)!`;
  document.getElementById("mensagem").innerText = mensagem;
}
