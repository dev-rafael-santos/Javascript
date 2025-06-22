// Função para converter temperatura entre Celsius e Fahrenheit
function converter() {
  // Lê o valor digitado e converte para número com ponto flutuante
  const temp = parseFloat(document.getElementById("temp").value);

  // Obtém o tipo de conversão selecionado no <select>
  const tipo = document.getElementById("tipo").value;
  console.log(`Temperatura digitada: ${temp}, Tipo: ${tipo}`);

  // Inicializa variável que armazenará o resultado da conversão
  let resultado = 0;

  // Se o tipo for Celsius para Fahrenheit
  if (tipo === "c2f") {
    resultado = (temp * 9/5) + 32; // Fórmula de conversão
    console.log(`Convertido para Fahrenheit: ${resultado}`);
  } 
  // Caso contrário, assume Fahrenheit para Celsius
  else {
    resultado = (temp - 32) * 5/9; // Fórmula de conversão
    console.log(`Convertido para Celsius: ${resultado}`);
  }

  // Exibe o resultado na tela com 2 casas decimais
  document.getElementById("resultado").innerText = `Resultado: ${resultado.toFixed(2)}`;

  // Marca o fim do processo no console
  console.log("------------------------");
}
