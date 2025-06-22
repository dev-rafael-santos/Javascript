// Função para coletar números via prompt e exibir média, maior e menor
function coletarNumeros() {
  // Lê a quantidade de números que o usuário quer digitar
  const qtd = parseInt(document.getElementById("quantidade").value);
  console.log(`Quantidade solicitada: ${qtd}`);

  // Cria um array vazio para armazenar os números digitados
  const numeros = [];

  // Loop para coletar cada número com prompt
  for (let i = 0; i < qtd; i++) {
    const valor = parseFloat(prompt(`Digite o ${i + 1}º número:`));
    console.log(`Entrada ${i + 1}: ${valor}`);

    // Verifica se é um número válido
    if (!isNaN(valor)) {
      numeros.push(valor);
      console.log(`Adicionado ao array: ${valor}`);
    } else {
      console.log("Valor inválido ignorado.");
    }
  }

  // Se nenhum número válido foi inserido, exibe mensagem de erro
  if (numeros.length === 0) {
    document.getElementById("resultado").innerText = "Nenhum número válido inserido.";
    console.log("Nenhum número válido. Encerrando.");
    return;
  }

  // Soma todos os números com reduce (acumulando a soma total)
  const soma = numeros.reduce((acc, val) => acc + val, 0);
  console.log(`Soma total: ${soma}`);

  // Calcula a média dos números
  const media = soma / numeros.length;
  console.log(`Média: ${media}`);

  // Encontra o maior número do array
  const maior = Math.max(...numeros);
  console.log(`Maior número: ${maior}`);

  // Encontra o menor número do array
  const menor = Math.min(...numeros);
  console.log(`Menor número: ${menor}`);

  // Exibe o resultado na tela
  document.getElementById("resultado").innerText =
    `Números: ${numeros.join(", ")}\nMédia: ${media}\nMaior: ${maior}\nMenor: ${menor}`;

  // Fim do processo
  console.log("Análise concluída.");
  console.log("------------------------");
}
