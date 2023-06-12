function exe21() {
    var vetorOriginal = [];
    var vetorSubstituido = [];
  
    // Lendo o vetor com números inteiros informados pelo usuário
    console.log("Digite os valores para preencher o vetor:");
    for (var i = 0; i < 10; i++) {
      var numero = parseInt(prompt("Digite o número para a posição " + (i + 1) + " do vetor:"));
      vetorOriginal.push(numero);
    }
  
    // Criando o segundo vetor substituindo os valores nulos por 1
    for (var j = 0; j < 10; j++) {
      if (vetorOriginal[j] === null) {
        vetorSubstituido.push(1);
      } else {
        vetorSubstituido.push(vetorOriginal[j]);
      }
    }
  
    // Mostrando os dois vetores
    console.log("Vetor Original:", vetorOriginal);
    console.log("Vetor Substituído:", vetorSubstituido);
  }