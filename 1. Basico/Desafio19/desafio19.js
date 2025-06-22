// Função para realizar um contador regressivo com atraso entre os números
function contar() {
  // Lê o número inicial do input e converte para inteiro
  let n = parseInt(document.getElementById("inicio").value);
  console.log(`Início do contador: ${n}`);

  // Pega a referência do elemento que mostrará o resultado
  const resultado = document.getElementById("resultado");

  // Limpa o conteúdo anterior (se houver)
  resultado.innerText = "";

  // Função interna que executa a contagem recursivamente
  function passo() {
    // Enquanto n for maior ou igual a 0
    if (n >= 0) {
      // Adiciona o número atual ao texto da página
      resultado.innerText += n + "\n";

      // Mostra no console o número atual
      console.log(n);

      // Decrementa o valor de n
      n--;

      // Chama novamente a função após 500ms (meio segundo)
      setTimeout(passo, 500);
    } else {
      // Quando a contagem termina, exibe a palavra "Fim!" na tela
      resultado.innerText += "\nFim!";
      console.log("Contagem encerrada.");
    }
  }

  // Inicia o processo
  passo();
}
