function  exe1() {

    let vet = [];
    
    for(let i = 0; i < 10; i++ ){

        vet[i] = Number(prompt(`Informe o ${i+1}o. elemento`))

    }

    //percorre o vertor e cria 2 novos vetores
    let pares = []; let impares = [];
    let iPares = 0; let iImpares = 0; //Indice dos vetores

    for(let i = 0; i < 10; i++){
        
        if(vet[i] % 2 == 0){
        pares[iPares] = vet[i]
        iPares++ // Incrementa para a proxima insercao
    }
    
    else{

        impares[iImpares] = vet[i]
        iImpares++ // Incrementa para a proxima insercao

    }
}

    console.log(`Valores pares ${pares} e a  qtde e ${pares.lenght}`)
    console.log(`Valores pares ${impares} e a  qtde e ${impares.lenght}`)

}