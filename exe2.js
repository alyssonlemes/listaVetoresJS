function exe2(){

    let numeros = [];
    let multiplosDe2 = [];
    let multiplosDe3 = [];
    let multiplosDe2e3 = [];
  
    // Preencher o vetor com 7 números inteiros
    for (let i = 0; i < 7; i++) {
      numeros.push(Number(prompt("Digite o número " + (i + 1))));
    }
  
    // Calcular os múltiplos
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        multiplosDe2.push(numeros[i]); // adiciona o numero ao vetor de multilplos de 2 caso o numero seja divisivel por 2
      }
      if (numeros[i] % 3 === 0) {
        multiplosDe3.push(numeros[i]); //adiciona o numero ao vetor de multiplos de 3 caso o numero seja divisivel por 3
      }
      if (numeros[i] % 2 === 0 && numeros[i] % 3 === 0) {
        multiplosDe2e3.push(numeros[i]); //adiciona o numero ao vetorde2e3 com o puxh caso o numero seja divisivel por 2 e por 3
      }
    }
  
    // Mostrar os resultados
    console.log("Múltiplos de 2: " + multiplosDe2.join(", "));
    console.log("Múltiplos de 3: " + multiplosDe3.join(", "));
    console.log("Múltiplos de 2 e 3: " + multiplosDe2e3.join(", "));
  }

