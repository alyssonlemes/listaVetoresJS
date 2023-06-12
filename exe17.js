function exe17() {
    var vetor1 = [];
    var vetor2 = [];
  
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
  
    // Criando o terceiro vetor com os elementos dos dois vetores anteriores
    var vetor3 = vetor1.concat(vetor2);
  
    // Ordenando o terceiro vetor em ordem decrescente
    vetor3.sort(function(a, b) {
      return b - a;
    });
  
    // Mostrando o terceiro vetor ordenado em ordem decrescente
    console.log("Terceiro vetor ordenado em ordem decrescente:");
    console.log(vetor3);
  }
  