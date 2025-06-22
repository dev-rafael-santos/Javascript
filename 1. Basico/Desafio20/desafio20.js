// Função para simular o lançamento de um dado de 6 lados
function rolarDado() {
  // Gera um número aleatório entre 1 e 6
  const resultado = Math.floor(Math.random() * 6) + 1;
  console.log(`Dado rolado: ${resultado}`);

  // Exibe o resultado na interface do usuário
  document.getElementById("resultado").innerText = `Resultado: ${resultado}`;

  // Marca o fim da execução no console
  console.log("------------------------");
}
