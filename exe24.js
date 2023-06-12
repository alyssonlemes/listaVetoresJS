function exe24() {
    var vetor = [];
    var vetorPrimos = [];
  
    // Preenchendo o vetor com valores informados pelo usuário
    console.log("Preencha o vetor com 15 números inteiros:");
    for (var i = 0; i < 15; i++) {
      var numero = parseInt(prompt("Digite o número para a posição " + (i + 1) + " do vetor:"));
      vetor.push(numero);
    }
  
    // Verificando se um número é primo
    function ehPrimo(num) {
      if (num <= 1) {
        return false;
      }
      for (var j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) {
          return false;
        }
      }
      return true;
    }
  
    // Construindo o vetor resultante com os números primos
    for (var k = 0; k < vetor.length; k++) {
      if (ehPrimo(vetor[k])) {
        vetorPrimos.push(vetor[k]);
      }
    }
  
    // Escrevendo o vetor resultante
    console.log("Vetor Resultante (Números Primos):");
    console.log(vetorPrimos);
  }