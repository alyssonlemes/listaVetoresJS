function exe12() {
    var numeros = []; // Vetor para armazenar os números informados
    var soma = 0;
  
    // Solicitando ao usuário para informar os números
    for (var i = 0; i < 5; i++) {
      var numero = parseInt(prompt("Informe um número inteiro:"));
      numeros.push(numero);
      soma += numero;
    }
  
    // Mostrando os números digitados
    console.log("Números digitados:", numeros);
  
    // Mostrando a soma dos números
    console.log("Soma:", soma);
  }