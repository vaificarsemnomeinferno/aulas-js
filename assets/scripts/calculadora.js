var numero1SemFormatacao, numero2SemFormatacao, numero1, numero2, operador, resultado;

function calcular(){
    numero1SemFormatacao = document.getElementById("txtNumero1").value;
    if(numero1SemFormatacao === ''){
        alert("Faltou digitar o primeiro número!");
    }

    operador = document.getElementById("selOperacoes").value;

    numero2SemFormatacao = document.getElementById("txtNumero2").value;
    if(numero2SemFormatacao === ''){
        alert("Faltou digitar o segundo número!");
    }
    
    numero1 = numero1SemFormatacao.replace(",",".");
    numero2 = numero2SemFormatacao.replace(",",".");
    
    if (numero1 !== '' && numero2 !== ''){
        if(isNaN(numero1) || isNaN(numero2)){
            alert("Um dos números é inválido!");
            resultado = "Um dos números é inválido! Verifique e tente novamente.";
        }
        else{
            switch(operador){
                case "soma":
                    resultado = somar(numero1, numero2);
                    break;
                case "subtracao":
                    resultado = subtrair(numero1, numero2);
                    break;
                case "multiplicacao":
                    resultado = multiplicar(numero1, numero2);
                    break;
                case "divisao":
                    resultado = dividir(numero1, numero2);
                    break;
                default:
                    alert("Escolha uma operação válida!");
                    resultado = "Escolha uma operação para continuar!";
                    break;
            }
        }
    }
    else{
        resultado = "";
    }

    resultado = resultado.toLocaleString();
    document.getElementById("txtResultado").value = resultado;
}

function somar(numero1, numero2){
    resultado = parseFloat(numero1) + parseFloat(numero2);

    return resultado;
}

function subtrair(numero1, numero2){
    resultado = numero1 - numero2;

    return resultado;
}

function multiplicar(numero1, numero2){
    resultado = numero1 * numero2;

    return resultado;
}

function dividir(numero1, numero2){
    resultado = numero1 / numero2;
    
    if(numero2 == 0){
        alert("Não é possível dividir por zero!");
        resultado = "Erro! Não é possível dividir um número por zero.";
    }

    return resultado;
}