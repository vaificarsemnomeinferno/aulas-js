const resultado = document.getElementById('resultado');
const resultadoSecundario = document.getElementById('resultado-sec');

function simularInvestimento() {
    let valorFormatado;
    let valor = document.getElementById('txtValor').value;
    const meses = document.getElementById('txtMeses').value;
    valor = valor.replace(',', '.');
    valor = parseFloat(valor);
    parseInt(meses);

    const taxa = 0.55 / 100;

    resultado.innerHTML = '';
    resultadoSecundario.innerHTML = '';

    let cont = 0;

    while (cont < meses) {
        valor += valor * taxa;
        valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        cont++;
        resultadoSecundario.innerHTML += ("<li style='list-style-type: none;'>" + cont + "º mês: " + valorFormatado + "</li>");
    }

    resultado.innerHTML = "<p>Ao final do período você terá " + valorFormatado + ". Veja detalhado abaixo:</p>";
    resultado.style.display = 'block'
    resultadoSecundario.style.display = 'block';
}

function simularParcelamento() {
    let valorFormatado, parcela;
    let valor = document.getElementById('txtValor').value;
    const meses = document.getElementById('txtMeses').value;
    valor = valor.replace(',', '.');
    valor = parseFloat(valor);
    parseInt(meses);

    resultado.innerHTML = '';

    var cont = 1;
    do {
        parcela = valor / cont;
        valorFormatado = parcela.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        if (cont == 1)
            resultado.innerHTML += ("<li style='list-style-type: none;'>" + cont + " parcela: " + valorFormatado + "</li>");
        resultado.innerHTML += ("<li style='list-style-type: none;'>" + cont + " parcelas: " + valorFormatado + "</li>");
        cont++;
    } while (cont <= meses);

    resultado.style.display = 'block';
}

function obterTabuada() {
    const numero = document.getElementById('txtNumero').value;
    let produto;

    resultado.innerHTML = "";

    for (let i = 0; i <= 10; i++) {
        produto = numero * i;
        resultado.innerHTML += (`<li style="list-style-type: none;">${numero} x ${i} = ${produto}</li>`);
    }

    resultado.style.display = 'block';
}