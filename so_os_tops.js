function FaturamentoComOsTOPs(produtos){
    let topDeLinha = 0
    let total = 0
    produtos.forEach(produto => {
        if(produto.preco>= 10000){
            topDeLinha+= produto.preco
        }
        total+= produto.preco
    });
    return {
        "totalTop": topDeLinha,
        "percentual": (topDeLinha)/(total)
    }
}

function solucao(produtos) {
	console.log(FaturamentoComOsTOPs(produtos))
    
}