function PedraPapel(joao, andre){
    if(joao == andre) return "EMPATE"
    else{
        if(joao == "PEDRA" && andre == "TESOURA") return "JOAO"
        if(joao == "TESOURA" && andre == "PAPEL") return "JOAO"
        if(joao == "PAPEL" && andre == "PEDRA") return "JOAO"
    }
    return "ANDRE"
    
}

function solucao(joao, andre) {
   console.log(PedraPapel(joao, andre))
}