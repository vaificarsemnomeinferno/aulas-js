const resultado = document.getElementById('resultado');

function verificarCidade() {
    const cidade = document.getElementById('selCidade').value;
    
    if (cidade == "pinda") {
        alert('Olá! Neste final de semana teremos uma super promoção!')
    }
}

function calcularImposto() {
    const anoFabricacao = document.getElementById('txtAno').value;
    const valorVeiculo = document.getElementById('txtValor').value;
    const anoAtual = new Date().getFullYear();
    var frase;

    if (anoFabricacao > anoAtual - 20) {
        const imposto = valorVeiculo * 0.04;
        const impostoFormatado = imposto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        frase = "O valor do IPVA para esse carro é: " + impostoFormatado;
    }
    else {
        frase = "Veículo isento de pagamento!";
    }

    resultado.innerHTML = "<p>" + frase + "</p>";
    resultado.style.display = 'block';
}

function parOuImpar() {
    const numero = document.getElementById('txtNumero').value;
    resultado.style.display = 'block';

    numero % 2 == 0 ? resultado.innerHTML = "<p>É par!</p>" : resultado.innerHTML = "<p>É ímpar!</p>";
}

function calcularCombustivel() {
    let etanol = document.getElementById('txtEtanol').value;
    let gasolina = document.getElementById('txtGasolina').value;
    let frase;

    etanol = etanol.replace(',','.');
    gasolina = gasolina.replace(',','.');

    if (etanol / gasolina > 0.7) {
        frase = 'Abasteça com gasolina!';
    }
    else if (etanol / gasolina < 0.7) {
        frase = 'Abasteça com etanol!';
    }
    else {
        frase = 'Qualquer um dos dois combustíveis é vantajoso.';
    }

    resultado.style.display = 'block';
    resultado.innerHTML = '<p>' + frase + '</p>';
}

function exibirDataDeHoje() {
    const agora = new Date();
    let diaDaSemana = agora.getDay();
    const dia = agora.getDate();
    let mes = agora.getMonth();
    const ano = agora.getFullYear();

    if(diaDaSemana == 0) {
        diaDaSemana = "Domingo";
    } else if (diaDaSemana == 1) {
        diaDaSemana = "Segunda-feira";        
    } else if (diaDaSemana == 2) {
        diaDaSemana = "Terça-feira";
    } else if (diaDaSemana == 3) {
        diaDaSemana = "Quarta-feira";
    } else if (diaDaSemana == 4) {
        diaDaSemana = "Quinta-feira";
    } else if (diaDaSemana == 5) {
        diaDaSemana = "Sexta-feira";
    } else if (diaDaSemana == 6) {
        diaDaSemana = "Sábado";
    } else {
        alert("Ocorreu um problema para determinar o dia da semana.")
        diaDaSemana = "";
    }

    switch(mes){
        case 0:
            mes = "janeiro";
            break;
        case 1:
            mes = "fevereiro";
            break;
        case 2:
            mes = "março";
            break;
        case 3:
            mes = "abril";
            break;
        case 4:
            mes = "maio";
            break;
        case 5:
            mes = "junho";
            break;
        case 6:
            mes = "julho";
            break;
        case 7:
            mes = "agosto";
            break;
        case 8:
            mes = "setembro";
            break;
        case 9:
            mes = "outubro";
            break;
        case 10:
            mes = "novembro";
            break;
        case 11:
            mes = "dezembro";
            break;
        default:
            alert("Ocorreu um problema para determinar o mês.");
            mes = "";
            break;
    }

    resultado.innerHTML = `<p>${diaDaSemana}, ${dia} de ${mes} de ${ano}.</p>`
}