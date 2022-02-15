function naoClique() {
    alert("Por favor, clique no outro botão!");
}

function clique() {
    alert("Isso aí! Parabéns!");
}

function exibirOla() {
    const nome = document.getElementById('txtNome').value;
    const saida = document.getElementById('resposta-pri');
    saida.style.display = "block";
    saida.innerHTML = `<p>Olá, ${nome}! Seja bem-vindo(a)!`;
}