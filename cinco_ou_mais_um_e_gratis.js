function CalculaPromocao(elements){
    let totalPrice = 0
    if(elements.length >= 5){
        elements.sort((a, b) => b- a).pop()
    }
    elements.forEach(element => {
        totalPrice += element
    });
    return totalPrice
}

function solucao(precos) {
   console.log(CalculaPromocao(precos))
    
}