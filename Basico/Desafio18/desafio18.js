// Função para inverter o texto digitado
function inverter() {
  // Obtém o texto digitado no input
  const texto = document.getElementById("texto").value;

  // Converte o texto em array de caracteres, inverte a ordem e junta de novo em string
  const invertido = texto.split("").reverse().join("");

  // Exibe o texto original no console
  console.log(`Texto original: ${texto}`);

  // Exibe o texto invertido no console
  console.log(`Texto invertido: ${invertido}`);

  // Exibe o texto invertido na interface
  document.getElementById("resultado").innerText = `Invertido: ${invertido}`;

  // Marca o fim da execução no console
  console.log("------------------------");
}
