function verificarIdade() {
  const nome = document.getElementById("nome").value;
  const idade = parseInt(document.getElementById("idade").value);
  let msg = "";
  if (idade < 18) {
    msg = `Olá, ${nome}! Você é menor de idade.`;
  } else {
    msg = `Olá, ${nome}! Você é maior de idade.`;
  }
  document.getElementById("mensagem").innerText = msg;
}
