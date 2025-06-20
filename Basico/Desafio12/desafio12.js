// Função para simular um saque e calcular quantas notas de cada valor serão usadas
function sacar() {
  // Lê o valor do input e transforma em número inteiro
  let valor = parseInt(document.getElementById("valor").value);
  console.log(`Valor solicitado para saque: R$ ${valor}`);

  // Define as notas disponíveis (em ordem decrescente)
  const notas = [100, 50, 20, 10, 5, 2, 1];

  // Inicializa string para mostrar o resultado na tela
  let resultado = "";

  // Loop para calcular quantas notas de cada valor serão usadas
  for (let nota of notas) {
    // Calcula quantas vezes a nota cabe no valor atual
    const qtd = Math.floor(valor / nota);

    // Se puder usar ao menos uma nota desse valor
    if (qtd > 0) {
      // Mostra no console o cálculo atual
      console.log(`Usando ${qtd} nota(s) de R$ ${nota}`);
      console.log(`Subtotal usado: ${qtd} x ${nota} = R$ ${qtd * nota}`);

      // Adiciona ao resultado da interface
      resultado += `${qtd} nota(s) de R$ ${nota}\n`;

      // Atualiza o valor restante usando o operador %= (resto da divisão)
      valor %= nota;

      // Mostra o valor restante após subtrair as notas usadas
      console.log(`Valor restante após usar notas de R$ ${nota}: R$ ${valor}`);
    }
  }

  // Mostra o resultado na tela
  document.getElementById("resultado").innerText = resultado;

  // Mostra fim do processo no console
  console.log("Saque finalizado.\n------------------------");
}
