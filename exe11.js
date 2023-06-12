function exe11() {
    var numeros = []; // Vetor para armazenar os números informados
    var numerosPares = []; // Vetor para armazenar os números pares
    var numerosImpares = []; // Vetor para armazenar os números ímpares
  
    // Solicitando ao usuário para informar os números
    for (var i = 0; i < 10; i++) {
      var numero = parseInt(prompt("Informe um número inteiro:"));
      numeros.push(numero);
    }
  
    // Separando os números pares e ímpares
    for (var j = 0; j < numeros.length; j++) {
      if (numeros[j] % 2 === 0) {
        numerosPares.push(numeros[j]);
      } else {
        numerosImpares.push(numeros[j]);
      }
    }
  
    // Mostrando os vetores resultantes
    console.log("Números Pares:", numerosPares);
    console.log("Números Ímpares:", numerosImpares);
  }
  