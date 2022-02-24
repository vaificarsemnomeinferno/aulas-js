const navbar = document.querySelector('.navbar');
const footer = document.querySelector('.footer');
const titulo = document.querySelector('.titulo');
const summaryTitle = document.querySelector('.summary-title');
var cor = document.getElementsByName('colors');

function recarregarPagina() {
    console.log("oii");
    location.reload();
}

function alterarCores() {
    var corEscolhida;

    for (var i = 0; i < cor.length; i++) {
        if (cor[i].checked) {
            corEscolhida = cor[i].value;
            console.log(corEscolhida);
        }
    }
    preencherComCor(corEscolhida);    
}

function preencherComCor(corEscolhida) {
    console.log("entrando aqui", corEscolhida)
    navbar.classList.add(`navbar-${corEscolhida}`);
    footer.classList.add(`footer-${corEscolhida}`);
    titulo.classList.add(`titulo-${corEscolhida}`);
    summaryTitle.classList.add(`summary-title-${corEscolhida}`);
}
