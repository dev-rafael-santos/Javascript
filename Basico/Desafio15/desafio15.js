// Função para contar a quantidade de vogais e consoantes em uma frase
function contar() {
    // Obtém o valor do input, converte para minúsculas e remove tudo que não for letra (a-z)
    const frase = document.getElementById("frase").value.toLowerCase().replace(/[^a-z]/g, "");
    console.log(`Frase filtrada: ${frase}`);

    // Inicializa contadores de vogais (v) e consoantes (c)
    let v = 0, c = 0;

    // Percorre cada letra da frase
    for (let letra of frase) {
        // Verifica se a letra é uma vogal
        if ("aeiou".includes(letra)) {
        v++;
        console.log(`Vogal encontrada: ${letra}`);
        } 
        // Caso contrário, é uma consoante
        else {
        c++;
        console.log(`Consoante encontrada: ${letra}`);
        }
    }

    // Exibe o resultado na tela
    document.getElementById("resultado").innerText = `Vogais: ${v} | Consoantes: ${c}`;

    // Mostra resumo no console
    console.log(`Total de vogais: ${v}`);
    console.log(`Total de consoantes: ${c}`);
    console.log("------------------------");
}
