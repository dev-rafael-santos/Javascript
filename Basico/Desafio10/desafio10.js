function calcularFatorial() {
  const n = parseInt(document.getElementById("numero").value);
  if (n < 0) {
    document.getElementById("resultado").innerText =
      "Fatorial não definido para negativos.";
    return;
  }

  let fat = 1;
  for (let i = 2; i <= n; i++) {
    fat *= i;
  }

  document.getElementById("resultado").innerText = `Fatorial de ${n} é ${fat}`;
}
