function verificarPrimo() {
  const n = parseInt(document.getElementById("numero").value);
  if (n <= 1) {
    document.getElementById("resultado").innerText = "Não é primo.";
    return;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      document.getElementById("resultado").innerText = "Não é primo.";
      return;
    }
  }

  document.getElementById("resultado").innerText = "É primo!";
}
