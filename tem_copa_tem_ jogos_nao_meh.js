function Sports(ano){
    if(ano%2 != 0 ) return ("MEH")
    var a = 1000000
    let i = 2022
    while(i < a){
        if(i == ano) return "COPA"
        i+=4
    }
    let k = 2024
    while(k < a){
        if(k == ano) return "JOGOS"
        k+=4
    }
}

function solucao(ano) {
    console.log(Sports(ano))
}