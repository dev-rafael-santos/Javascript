// Função para verificar se o texto digitado é um palíndromo
function verificar() {
  // Obtém o texto do input, converte para minúsculas e remove todos os espaços
  const texto = document.getElementById("texto").value.toLowerCase().replace(/\s/g, "");
  console.log(`Texto normalizado: ${texto}`);

  // Inverte o texto: divide em array, inverte e junta novamente
  const invertido = texto.split("").reverse().join("");
  console.log(`Texto invertido: ${invertido}`);

  // Compara o texto original com o invertido para saber se é palíndromo
  const resultado = texto === invertido ? "É um palíndromo!" : "Não é palíndromo.";
  console.log(`Resultado: ${resultado}`);

  // Exibe o resultado na tela
  document.getElementById("resultado").innerText = resultado;

  // Marca separação visual no console
  console.log("------------------------");
}
