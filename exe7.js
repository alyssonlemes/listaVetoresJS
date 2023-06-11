function exe7() {
    let vetor = [];
  
    // Preencher o vetor com dez números reais
    for (let i = 0; i < 10; i++) {
      vetor.push(parseFloat(prompt(`Informe o número ${i+1}:`)));
    }
  
    let quantidadeNegativos = 0;
    let somaPositivos = 0;
  
    // Calcular a quantidade de números negativos e a soma dos números positivos
    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] < 0) {
        quantidadeNegativos++;
      } else if (vetor[i] > 0) {
        somaPositivos += vetor[i];
      }
    }
  
    // Mostrar os resultados
    console.log("Quantidade de números negativos:", quantidadeNegativos);
    console.log("Soma dos números positivos:", somaPositivos);
  }