//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim();

    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        document.getElementById('amigo').value = '';
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É necessário pelo menos dois amigos para sortear.');
        return;
    }

    let amigosSorteados = [...amigos];
    let resultados = [];

    while (amigosSorteados.length > 0) {
        const amigoSorteado = amigosSorteados.splice(Math.floor(Math.random() * amigosSorteados.length), 1)[0];
        const amigoParaSortear = amigosSorteados.splice(Math.floor(Math.random() * amigosSorteados.length), 1)[0];

        resultados.push(`${amigoSorteado} -> ${amigoParaSortear}`);
    }

    exibirResultados(resultados);
}

function exibirResultados(resultados) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    resultados.forEach(result => {
        const item = document.createElement('li');
        item.textContent = result;
        resultadoElement.appendChild(item);
    });
}
