const navbar = document.querySelector('.navbar');
const footer = document.querySelector('.footer');
const titulo = document.querySelector('.titulo');
const summaryTitle = document.querySelector('.summary-title');
var cor = document.getElementsByName('colors');
var corEscolhida, corAnterior;

function recarregarPagina() {
    console.log("oii");
    location.reload();
}

function alterarCores() {

    for (var i = 0; i < cor.length; i++) {
        if (cor[i].checked) {
            corEscolhida = cor[i].value;
        }
    }
    preencherComCor(corEscolhida);    
}

function preencherComCor(corEscolhida) {
    navbar.classList.remove(`navbar-${corAnterior}`);
    footer.classList.remove(`footer-${corAnterior}`);
    titulo.classList.remove(`titulo-${corAnterior}`);
    summaryTitle.classList.remove(`summary-title-${corAnterior}`);
    navbar.classList.add(`navbar-${corEscolhida}`);
    footer.classList.add(`footer-${corEscolhida}`);
    titulo.classList.add(`titulo-${corEscolhida}`);
    summaryTitle.classList.add(`summary-title-${corEscolhida}`);
    corAnterior = corEscolhida;
}
