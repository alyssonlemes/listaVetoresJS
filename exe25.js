function exe25() {
    var vetor = [];
  
    // Preenchendo o vetor com valores informados pelo usuário
    console.log("Preencha o vetor com 15 números inteiros:");
    for (var i = 0; i < 15; i++) {
      var numero = parseInt(prompt("Digite o número para a posição " + (i + 1) + " do vetor:"));
      vetor.push(numero);
    }
  
    // Encontrando o maior valor no vetor
    var maiorValor = Math.max.apply(null, vetor);
  
    // Dividindo todos os elementos pelo maior valor
    for (var j = 0; j < vetor.length; j++) {
      vetor[j] /= maiorValor;
    }
  
    // Mostrando o vetor após os cálculos
    console.log("Vetor após os cálculos:");
    console.log(vetor);
  }