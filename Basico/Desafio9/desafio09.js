// Função para verificar se um número é primo
function verificarPrimo() {
  // Obtém o número digitado e converte para inteiro
  const n = parseInt(document.getElementById("numero").value);
  console.log(`Número digitado: ${n}`);

  // Números menores ou iguais a 1 não são primos
  if (n <= 1) {
    document.getElementById("resultado").innerText = "Não é primo.";
    console.log("Motivo: número menor ou igual a 1.");
    return;
  }

  // Verifica se existe algum divisor além de 1 e ele mesmo
  // Usa Math.sqrt(n) para otimizar (não precisa verificar até n)
  for (let i = 2; i <= Math.sqrt(n); i++) {
    console.log(`Testando divisor: ${i}`);
    
    // Se o número for divisível por qualquer valor nesse intervalo, não é primo
    if (n % i === 0) {
      document.getElementById("resultado").innerText = "Não é primo.";
      console.log(`Divisível por ${i} → Não é primo.`);
      return;
    }
  }

  // Se nenhum divisor foi encontrado, o número é primo
  document.getElementById("resultado").innerText = "É primo!";
  console.log("Resultado: É primo!");
  console.log("------------------------");
}
