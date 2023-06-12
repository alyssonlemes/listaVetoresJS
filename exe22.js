function exe22() {
    var vetorA = [];
    var vetorB = [];
  
    // Preenchendo o vetor A com valores informados pelo usuário
    console.log("Preencha o vetor A:");
    for (var i = 0; i < 10; i++) {
      var valor = parseInt(prompt("Digite o valor para a posição " + (i + 1) + " do vetor A:"));
      vetorA.push(valor);
    }
  
    // Compactando o vetor A e armazenando no vetor B
    for (var j = 0; j < vetorA.length; j++) {
      if (vetorA[j] !== null && vetorA[j] >= 0) {
        vetorB.push(vetorA[j]);
      }
    }
  
    // Mostrando o vetor B
    console.log("Vetor B:");
    console.log(vetorB);
  }