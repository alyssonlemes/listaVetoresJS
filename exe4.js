function exe4() {
    let numeros = [];
    
    for (let i = 0; i < 15; i++) {
        numeros.push(Number(prompt("Digite o número " + (i + 1))));
      }
    
    let posicoes = [];
    
    // Verificar a existência de elementos iguais a 30 e armazenar suas posições
    for (let i = 0; i < vetor.length; i++) {
      if (numeros[i] === 30) {
        posicoes.push(i);
      }
    }
    
    // Mostrar as posições dos elementos iguais a 30
    if (posicoes.length > 0) {
      console.log("Elemento 30 encontrado nas posições:", posicoes);
    } else {
      console.log("Não foram encontrados elementos iguais a 30.");
    }
  }