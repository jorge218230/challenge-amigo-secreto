//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigosSecretos = [];

function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let input = document.getElementById("nomeAmigo");
    let nome = input.value.trim();

    // Valida se o campo não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array
    amigosSecretos.push(nome);

    // Limpa o campo de entrada
    input.value = "";

    // Exibe os amigos na tela
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de adicionar novos elementos
    
    for (let i = 0; i < amigosSecretos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigosSecretos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    
    // Valida se há amigos disponíveis para sortear
    if (amigosSecretos.length === 0) {
        resultado.innerHTML = "Nenhum amigo disponível para sorteio.";
        return;
    }
    
    // Gera um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigosSecretos.length);
    let amigoSorteado = amigosSecretos[indiceSorteado];
    
    // Exibe o resultado do sorteio
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}