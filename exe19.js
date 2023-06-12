function exe19() {
    var vetor1 = [];
    var vetor2 = [];
    var vetorResultado = [];
  
    // Preenchendo o primeiro vetor com valores informados pelo usuário
    console.log("Preencha o primeiro vetor:");
    for (var i = 0; i < 10; i++) {
      var valor = parseInt(prompt("Digite o valor para a posição " + (i + 1) + " do primeiro vetor:"));
      vetor1.push(valor);
    }
  
    // Preenchendo o segundo vetor com valores informados pelo usuário
    console.log("Preencha o segundo vetor:");
    for (var j = 0; j < 10; j++) {
      var valor = parseInt(prompt("Digite o valor para a posição " + (j + 1) + " do segundo vetor:"));
      vetor2.push(valor);
    }
  
    // Realizando a multiplicação dos elementos de mesmo índice e colocando o resultado no terceiro vetor
    for (var k = 0; k < 10; k++) {
      var resultado = vetor1[k] * vetor2[k];
      vetorResultado.push(resultado);
    }
  
    // Mostrando o vetor resultante
    console.log("Vetor resultante:");
    console.log(vetorResultado);
  }