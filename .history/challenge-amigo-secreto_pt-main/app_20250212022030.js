let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = '';
    } else {
        alert("Por favor, insira um nome válido.");
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';

    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    }

    let amigosSorteados = [...amigos];
    let resultado = [];

    while (amigosSorteados.length) {
        const aleatorio = amigosSorteados.splice(Math.floor(Math.random() * amigosSorteados.length), 1)[0];
        resultado.push(aleatorio);
    }

    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement("li");
        item.textContent = `${amigos[i]} -> ${resultado[i]}`;
        listaResultado.appendChild(item);
    }
}
