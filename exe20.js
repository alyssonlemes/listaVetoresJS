function exe20() {
    var vetor = [];
  
    // Preenchendo o vetor com números inteiros informados pelo usuário
    console.log("Preencha o vetor com números inteiros:");
    for (var i = 0; i < 10; i++) {
      var numero = parseInt(prompt("Digite o número para a posição " + (i + 1) + " do vetor:"));
      vetor.push(numero);
    }
  
    // Mostrando somente os números positivos do vetor
    console.log("Números positivos do vetor:");
    for (var j = 0; j < vetor.length; j++) {
      if (vetor[j] > 0) {
        console.log(vetor[j]);
      }
    }
  }
  