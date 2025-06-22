// Função que simula um menu de operações bancárias em loop até o usuário escolher sair
function menu() {
  // Inicializa o saldo com valor 0
    let saldo = 0;

    // Declara a variável que armazenará a opção escolhida
    let opcao;

    // Executa o menu enquanto a opção for diferente de "4" (sair)
    do {
        // Exibe o menu de opções usando prompt
        opcao = prompt("1 - Ver saldo\n2 - Depositar\n3 - Sacar\n4 - Sair");
        console.log(`Opção escolhida: ${opcao}`);

        // Usa switch para tratar cada opção
        switch (opcao) {
        // Opção 1: Ver saldo
        case "1":
            alert(`Saldo atual: R$ ${saldo.toFixed(2)}`);
            console.log(`Saldo consultado: R$ ${saldo.toFixed(2)}`);
            break;

        // Opção 2: Depositar
        case "2":
            const dep = parseFloat(prompt("Valor para depósito:"));
            console.log(`Valor digitado para depósito: ${dep}`);
            if (dep > 0) {
            saldo += dep;
            console.log(`Depósito realizado. Novo saldo: R$ ${saldo.toFixed(2)}`);
            } else {
            console.log("Depósito inválido.");
            }
            break;

        // Opção 3: Sacar
        case "3":
            const saque = parseFloat(prompt("Valor para saque:"));
            console.log(`Valor digitado para saque: ${saque}`);
            if (saque > 0 && saque <= saldo) {
            saldo -= saque;
            console.log(`Saque realizado. Novo saldo: R$ ${saldo.toFixed(2)}`);
            } else {
            alert("Saque inválido ou saldo insuficiente.");
            console.log("Tentativa de saque inválida.");
            }
            break;

        // Opção 4: Sair
        case "4":
            alert("Saindo...");
            console.log("Usuário encerrou o programa.");
            break;

        // Qualquer outra opção: inválida
        default:
            alert("Opção inválida.");
            console.log("Opção inválida informada.");
        }

        // Separador no console para facilitar leitura entre iterações
        console.log("----------------------------");

    } while (opcao !== "4");
}
