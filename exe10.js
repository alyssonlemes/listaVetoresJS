function exe10() {
    // Preenchendo o primeiro vetor com dez números inteiros
    var vetor1 = [];
    for (var i = 0; i < 10; i++) {
      var numero = Math.floor(Math.random() * 100); // Gera um número aleatório entre 0 e 99
      vetor1.push(numero);
    }
  
    // Preenchendo o segundo vetor com cinco números inteiros
    var vetor2 = [];
    for (var j = 0; j < 5; j++) {
      var numero = Math.floor(Math.random() * 100); // Gera um número aleatório entre 0 e 99
      vetor2.push(numero);
    }
  
    // Calculando o primeiro vetor resultante
    var vetorResultado1 = [];
    for (var k = 0; k < vetor1.length; k++) {
      if (vetor1[k] % 2 === 0) {
        for (var l = 0; l < vetor2.length; l++) {
          vetorResultado1.push(vetor1[k] + vetor2[l]);
        }
      }
    }
  
    // Calculando o segundo vetor resultante
    var vetorResultado2 = [];
    for (var m = 0; m < vetor1.length; m++) {
      if (vetor1[m] % 2 !== 0) {
        var divisores = 0;
        for (var n = 0; n < vetor2.length; n++) {
          if (vetor2[n] !== 0 && vetor1[m] % vetor2[n] === 0) {
            divisores++;
          }
        }
        vetorResultado2.push(divisores);
      }
    }
  
    // Mostrando os vetores resultantes
    console.log("Vetor Resultante 1:", vetorResultado1);
    console.log("Vetor Resultante 2:", vetorResultado2);
  }