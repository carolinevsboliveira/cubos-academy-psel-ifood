function ViagemLonga(distancia){
    if(distancia < 100) return 2*distancia*100
    else return 1.50*distancia*100
}
function AplicaLogica(tempo, distancia){
    if(tempo<= 5 ) return 6*100
    if(tempo < 5 || tempo <=60) return tempo*100 + 50*distancia
    if(tempo >60) return ViagemLonga(distancia)
}
function solucao(tempo, distancia) {
	console.log(AplicaLogica(tempo, distancia))

}
