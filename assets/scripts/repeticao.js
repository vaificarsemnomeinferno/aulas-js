function simuladorInvestimento(){
    var valor, valorFormato, meses
    const taxa = 0.55/100
    valor= parseFloat(document.getElementById("txtValor").value)
    meses= parseInt(document. getElementeById("txtMeses").value)

    var resultParcial= document.getElementById("resultadoDetalhado")
    resultParcial.style.display="block"

    var resultFinal= document.getElementById("resultado")
    resultFinal.style.display="block"

    resultParcial.innerHTML=""
    resultFinal.innerHTML= ""


}
