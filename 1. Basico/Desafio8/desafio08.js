// Função para contar quantos números pares e ímpares existem entre dois valores
function contar() {
  // Obtém o valor inicial do intervalo
  const inicio = parseInt(document.getElementById("inicio").value);
  console.log(`Valor inicial: ${inicio}`);

  // Obtém o valor final do intervalo
  const fim = parseInt(document.getElementById("fim").value);
  console.log(`Valor final: ${fim}`);

  // Inicializa os contadores de pares e ímpares
  let pares = 0, impares = 0;

  // Percorre do valor inicial até o final
  for (let i = inicio; i <= fim; i++) {
    // Verifica se o número é par
    if (i % 2 === 0) {
      pares++;
      console.log(`${i} é PAR`);
    } 
    // Caso contrário, é ímpar
    else {
      impares++;
      console.log(`${i} é ÍMPAR`);
    }
  }

  // Exibe o resultado na tela com a contagem final
  document.getElementById("resultado").innerText =
    `Entre ${inicio} e ${fim}, há ${pares} número(s) PAR(ES) e ${impares} número(s) ÍMPAR(ES).`;

  // Marca o fim da execução no console
  console.log("Contagem finalizada.\n------------------------");
}
