function exe3(){
    // entrada de dados
    let codigos = []
    let estoque = []
    for(let i=0; i < 10;i++){
        codigos.push(prompt(`Informe o código do produto ${i+1}`))
        estoque.push(Number(prompt(`Informe a qtde do produto ${i+1}`)))
    }
    let cliente = Number(prompt(`Informe código do cliente`))
    do {
        let codigo = prompt(`Informe código do produto para compra`)
        // percorrer o vetor codigos para ver se existe
        for(let i=0;i<10;i++){
            if (codigo == codigos[i]){
                // achou o produto
                let qtde = Number(prompt(`Informe qtde da compra`))
                if (qtde <= estoque[i]){
                    // qtde suficiente
                    estoque[i] = estoque[i] - qtde // atualizei
                    alert('Compra realizada com sucesso')
                }
                else {
                    alert(`Estoque insuficiente, permitido ${estoque[i]}`)
                }
                break // sai do for sem incrementar o i - já encontrou o produto
            }
        }
        if (i == 10){ // valor em que saiu do for
            alert(`Produto não existe`)
        }
        cliente = Number(prompt(`Informe código do cliente. Digite 0 para encerrar`))
    }
    while(cliente != 0)
}