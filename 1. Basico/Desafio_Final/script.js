let tarefas = [];

function salvarTarefas() {
  const dados = {
    lista: tarefas,
    expiraEm: Date.now() + (1000 * 60 * 60 * 24) // 1 dia
  };
  localStorage.setItem('tarefas', JSON.stringify(dados));
}

function carregarTarefas() {
  const dadosSalvos = localStorage.getItem('tarefas');
  if (!dadosSalvos) return;

  try {
    const dados = JSON.parse(dadosSalvos);
    if (Date.now() > dados.expiraEm) {
      localStorage.removeItem('tarefas'); // Expirado
      return;
    }

    tarefas = dados.lista || [];
    tarefas.forEach(tarefa => criarElementoTarefa(tarefa.texto, tarefa.concluida));
  } catch (e) {
    console.error("Erro ao carregar tarefas:", e);
    localStorage.removeItem('tarefas');
  }
}

function adicionarTarefa() {
  const input = document.getElementById('tarefaInput');
  const texto = input.value.trim();

  if (texto === '') {
    alert("Digite uma tarefa válida!");
    return;
  }

  const novaTarefa = { texto, concluida: false };
  tarefas.push(novaTarefa);
  criarElementoTarefa(texto, false);
  salvarTarefas();

  input.value = '';
  input.focus();
}

function criarElementoTarefa(texto, concluida) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = texto;
  if (concluida) span.classList.add('concluida');

  const divBotoes = document.createElement('div');
  divBotoes.className = 'botoes';

  const btnConcluir = document.createElement('button');
  btnConcluir.textContent = 'Concluir';
  btnConcluir.onclick = () => {
    span.classList.toggle('concluida');

    const index = Array.from(document.getElementById('listaTarefas').children).indexOf(li);
    tarefas[index].concluida = !tarefas[index].concluida;
    salvarTarefas();
  };

  const btnRemover = document.createElement('button');
  btnRemover.textContent = 'Remover';
  btnRemover.onclick = () => {
    const index = Array.from(document.getElementById('listaTarefas').children).indexOf(li);
    tarefas.splice(index, 1);
    li.remove();
    salvarTarefas();
  };

  divBotoes.appendChild(btnConcluir);
  divBotoes.appendChild(btnRemover);

  li.appendChild(span);
  li.appendChild(divBotoes);

  document.getElementById('listaTarefas').appendChild(li);
}

// Carregar ao abrir a página
carregarTarefas();
