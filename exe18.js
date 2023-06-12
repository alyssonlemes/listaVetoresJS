function exe18() {
    var vetor = [];
  
    // Preenchendo o vetor com quinze números informados pelo usuário
    console.log("Preencha o vetor com quinze números:");
    for (var i = 0; i < 15; i++) {
      var numero = parseInt(prompt("Digite o número para a posição " + (i + 1) + " do vetor:"));
      vetor.push(numero);
    }
  
    // Encontrando o maior número e a posição ocupada por ele no vetor
    var maiorNumero = vetor[0];
    var posicaoMaiorNumero = 0;
    for (var j = 1; j < vetor.length; j++) {
      if (vetor[j] > maiorNumero) {
        maiorNumero = vetor[j];
        posicaoMaiorNumero = j;
      }
    }
  
    // Encontrando o menor número e a posição ocupada por ele no vetor
    var menorNumero = vetor[0];
    var posicaoMenorNumero = 0;
    for (var k = 1; k < vetor.length; k++) {
      if (vetor[k] < menorNumero) {
        menorNumero = vetor[k];
        posicaoMenorNumero = k;
      }
    }
  
    // Mostrando o maior número e a posição ocupada por ele no vetor
    console.log("Maior número: " + maiorNumero);
    console.log("Posição ocupada pelo maior número: " + posicaoMaiorNumero);
  
    // Mostrando o menor número e a posição ocupada por ele no vetor
    console.log("Menor número: " + menorNumero);
    console.log("Posição ocupada pelo menor número: " + posicaoMenorNumero);
  }
  