// Para que o menu seja fechado no mobile e aberto no desktop

window.addEventListener('resize',abrirEFecharSummary);

function abrirEFecharSummary() {
    const detail1 = document.getElementById('detail-1');
    const detail2 = document.getElementById('detail-2');
    const screen = document.body.clientWidth;

    if (screen <= 768) {
        detail1.removeAttribute('open');
        detail2.removeAttribute('open');
    }
    else {
        detail1.setAttribute('open',true);
        detail2.setAttribute('open',true);
    }
}

// Para ENTER não enviar formulário
document.addEventListener("keydown", function(e) {
    if(e.key === 'Enter') {
        e.preventDefault();
    }
  });