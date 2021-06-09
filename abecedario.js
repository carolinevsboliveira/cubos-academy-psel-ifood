function QuantasPerderam(letra, palavras){
    let count = 0
    palavras.forEach(element => {
        if(element[0] != letra) count+=1
    });
    return count
    
}
function solucao(letra, palavras) {
	console.log(QuantasPerderam(letra, palavras))
    
}