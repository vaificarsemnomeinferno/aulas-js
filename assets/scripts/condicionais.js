function parOuImpar() {
    const numero = document.getElementById("txtNumero").value;
    var frase;
    
    numero % 2 == 0 ? frase= "O número é par" : frase= "O número é ímpar"
    
    resultado.innerHTML = frase;
    resultado.style.display="block";


}

function calcularCombustiveis (){
    const precoEtanol= document.getElementById("txtEtanol").value;
    const precoGasolina= document.getElementById("txtGasolina").value;

    const precoEtanolFormatado = precoEtanol.replace(",",".");
    const precoGasolinaFormatado = precoGasolina.replace(",",".");

    const resultado = document.getElementById("resultado");

    resultado.style.display="block";

    if (precoEtanolFormatado/precoGasolinaFormatado<0.7){
            resultado.innerHTML = "<p>Abasteça com Etanol</p>"

    }
    else if(precoEtanolFormatado / precoGasolinaFormatado > 0.7) {
        resultado.innerHTML = "<p>Abasteça com Gasolina</p>"

    }
    else {
        resultado.innerHTML= "<p>você pode abastecer com qualquer um dos dois</p>";
    }


}

function exibirDataDeHoje() {
    var agora= new Date();
    var diaDaSemana=agora.getDay()
    var dia=agora.getDate()
    var mes=agora.getMonth()
    var ano=agora.getFullYear()
    const resultado= document.getElementById("resultado")
    const resultadoSecundario= document.getElementById("resultado-sec")

    if(diaDaSemana ==0){
            diaDaSemana="Domingo"
    } else if (diaDaSemana==1){
            diaDaSemana="Segunda-feira"
    }
    else if (diaDaSemana==2){
        diaDaSemana="Terça-feira"
    }
    else if (diaDaSemana==3){
        diaDaSemana="Quarta-feira"
    }
    else if (diaDaSemana==4){
        diaDaSemana="Quinta-feira"
    }
    else if (diaDaSemana==5){
        diaDaSemana="Sexta-feira"
    }
    else if (diaDaSemana==6){
        diaDaSemana="Sábado"
    }
    else{
        alert ("Dia da Semana não encontrado!")
    }

switch (mes){
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 8:
    case 9:
    case 11:
        frase ="O mês tem 31 dias"
        break

    case 3:
    case 5:
    case 8:
    case 10:
        frase ="O mês tem 30 dias"
        break 
           
    case 1:
        frase ="O mês tem 28 ou 29 dias"
        break

        default:
            alert("Ocorreu algum erro com mês")
            break
}

    switch(mes) {
        case 0: 
                mes="Janeiro"
                break
        case 1: 
                mes="Fevereiro"
                break
        case 2: 
                mes="Março"
                break
        case 3: 
                mes="Abril"
                break
        case 4: 
                mes="Maio"
                break
        case 5: 
                mes="Junho"
                break
        case 6: 
                mes="julho"
                break
        case 7: 
                mes="Agosto"
                break
        case 8: 
                mes="Setembro"
                break
        case 9: 
                mes="Outubro"
                break
        case 10: 
                mes="Novembro"
                break
        case 11: 
                mes="Dezembro"
                break
        default:
                alert("Mês não encontrado!")
                break
        
    }

    resultado.style.display="block"


    resultado.innerHTML= `<p>${diaDaSemana}, ${dia} de ${mes} de ${ano}.</p>`
    resultadoSecundario.innerHTML = `<p>${frase}</p>`
}