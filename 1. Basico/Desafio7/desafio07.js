// Função para exibir a tabuada de um número digitado pelo usuário
function mostrarTabuada() {
  // Obtém o número informado no campo com id="numero" e converte para inteiro
  const numero = parseInt(document.getElementById("numero").value);
  console.log(`Número escolhido: ${numero}`);

  // Inicializa a string que armazenará o conteúdo da tabuada
  let resultado = `Tabuada do ${numero}\n`;

  // Laço que percorre de 1 até 10 para montar a tabuada
  for (let i = 1; i <= 10; i++) {
    const linha = `${numero} x ${i} = ${numero * i}`;
    resultado += linha + "\n"; // Adiciona a linha à variável resultado
    console.log(linha);        // Mostra a linha atual da tabuada no console
  }

  // Exibe o resultado completo da tabuada no elemento com id="resultado"
  document.getElementById("resultado").innerText = resultado;

  // Marca que o processo foi concluído no console
  console.log("Tabuada finalizada.\n------------------------");
}
