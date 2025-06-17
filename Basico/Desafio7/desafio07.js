function mostrarTabuada() {
  const numero = parseInt(document.getElementById("numero").value);
  let resultado = `Tabuada do ${numero}\\n`;
  for (let i = 1; i <= 10; i++) {
    resultado += `${numero} x ${i} = ${numero * i}\\n`;
  }
  document.getElementById("resultado").innerText = resultado;
}
