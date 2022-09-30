function simularInvestimento(){
    var valor, valorFormato, meses, contador
    const taxa = 0.55/100
    valor= parseFloat(document.getElementById("txtValor").value)
    meses= parseInt(document.getElementById("txtMeses").value)

    var resultParcial = document.getElementById("resultado-sec")
    resultParcial.style.display="block"
 
    var resultFinal= document.getElementById("resultado")
    resultFinal.style.display="block"

    resultParcial.innerHTML=""
    resultFinal.innerHTML= ""

    contador= 0
    while(contador < meses) {
        valor += valor * taxa
        valorFormato= valor.toLocaleString( 'pt-br', { style: 'currency', currency: 'BRL'})
        contador++
        resultParcial.innerHTML += ("<p>" + contador + "º mês:" + valorFormato + "</p>")
    } 
     resultFinal.innerHTML= "<p> Ao final do período você terá" +valorFormato+"</p>"
}

// parcelamento

function simularParcelamento(){
    var valor, ParcelaFormatada, meses, contador, parcela
    
    valor= parseFloat(document.getElementById("txtValor").value)
    meses= parseInt(document.getElementById("txtMeses").value)

    var resultParcial = document.getElementById("resultado-sec")
    resultParcial.style.display="block"
 
   

    resultParcial.innerHTML=""
    

    contador= 1
    do{
        parcela= valor / contador
        ParcelaFormatada= parcela.toLocaleString( 'pt-br', { style: 'currency', currency: 'BRL'})
        resultParcial.innerHTML+=("<p>"+contador+ " parcelas: " + ParcelaFormatada+ "</p>")
        contador++

    }   while(contador <= meses)

    
    

}
