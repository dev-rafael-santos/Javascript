const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

function tentar() {
  const palpite = parseInt(document.getElementById("palpite").value);
  tentativas++;
  let msg = "";

  if (palpite === numeroSecreto) {
    msg = `Parabéns! Você acertou em ${tentativas} tentativa(s).`;
  } else if (palpite < numeroSecreto) {
    msg = "Tente um número MAIOR.";
  } else if (palpite > numeroSecreto) {
    msg = "Tente um número MENOR.";
  } else {
    msg = "Digite um número válido.";
  }

  document.getElementById("mensagem").innerText = msg;
}
