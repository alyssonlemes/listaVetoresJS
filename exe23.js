function exe23() {
    var vetorA = [];
    var vetorB = [];
  
    // Preenchendo o vetor A com valores informados pelo usuário
    console.log("Preencha o vetor A:");
    for (var i = 0; i < 5; i++) {
      var valor = parseInt(prompt("Digite o valor para a posição " + (i + 1) + " do vetor A:"));
      vetorA.push(valor);
    }
  
    // Preenchendo o vetor B com valores informados pelo usuário
    console.log("Preencha o vetor B:");
    for (var j = 0; j < 5; j++) {
      var valor = parseInt(prompt("Digite o valor para a posição " + (j + 1) + " do vetor B:"));
      vetorB.push(valor);
    }
  
    var resultado = 0;
    var tamanho = vetorA.length;
  
    // Subtraindo os elementos de A pelos elementos correspondentes de B
    for (var k = 0; k < tamanho; k++) {
      resultado += vetorA[k] - vetorB[tamanho - k - 1];
    }
  
    // Mostrando o resultado das subtrações
    console.log("Resultado das subtrações:", resultado);
  }
  