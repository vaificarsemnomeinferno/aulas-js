const navbar = document.querySelector('.navbar');
const footer = document.querySelector('.footer');
const titulo = document.querySelector('.titulo');
const summaryTitle = document.querySelector('.summary-title');

function alterarCores() {
    var corEscolhida;
    var cor = document.getElementsByName('colors');

    for (var i = 0; i < cor.length; i++) {
        if (cor[i].checked) {
            corEscolhida = cor[i].value;
            console.log(corEscolhida);
        }
    }

    navbar.classList.add(`navbar-${corEscolhida}`);
    footer.classList.add(`footer-${corEscolhida}`);
    titulo.classList.add(`titulo-${corEscolhida}`);
    summaryTitle.classList.add(`summary-title-${corEscolhida}`);
}