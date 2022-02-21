  function validarCPF() {
    let inputCPF = document.querySelector('input\[name=cpf\]');
    let cpf;
    cpf = inputCPF.value.replace(/\./g, '').replace('-', '');

    var Soma;
    var Resto;
    Soma = 0;

    if (cpf == "00000000000") return false;

    for (i=1; i<=9; i++){
        Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    }
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10)) ) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11) ) ) return false;
    return true;
}

function testarCPF() {
    const inputCPF = document.getElementById('txtCPF');
    const mensagem = document.getElementById('resultado');
    const cpfValido = validarCPF();
    mensagem.style.display = 'block'

    if (cpfValido == false) {
        // inputCPF.classList.add('invalido');
        // icone.innerHTML = 'highlight_off';
        mensagem.innerHTML = "<span class='material-icons-round icone-material icone-invalido'>highlight_off</span>";
    }
    else {
        // inputCPF.classList.remove('invalido');
        // icone.innerHTML = 'check_circle_outline';
        mensagem.innerHTML = "<span class='material-icons-round icone-material icone-valido'>check_circle_outline</span>";
    }
}

document.addEventListener("keydown", function(e) {
    if(e.key === 'Enter') {
        testarCPF();
        e.preventDefault();
    }
  });
          