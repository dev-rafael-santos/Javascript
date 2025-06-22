// Função para somar dois números digitados pelo usuário
function somar() {
  // Obtém o valor do primeiro número e converte para número decimal (float)
  const n1 = parseFloat(document.getElementById("num1").value);
  console.log(`Número 1: ${n1}`);

  // Obtém o valor do segundo número e converte para número decimal (float)
  const n2 = parseFloat(document.getElementById("num2").value);
  console.log(`Número 2: ${n2}`);

  // Realiza a soma dos dois números
  const resultado = n1 + n2;
  console.log(`Resultado da soma: ${resultado}`);

  // Exibe o resultado na página no elemento com id="resultado"
  document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
  
  // Log final para indicar que a função foi executada
  console.log("Soma finalizada.\n------------------------");
}
