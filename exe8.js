function exe8() {
    let nomes = [];
    let medias = [];
  
    // Preencher o vetor com os nomes dos sete alunos e carregar outro vetor com as médias finais
    for (let i = 0; i < 7; i++) {
      nomes.push(prompt(`Informe o nome do aluno ${i+1}:`));
      medias.push(parseFloat(prompt(`Informe a média final do aluno ${nomes[i]}:`)));
    }
  
    let maiorMedia = -Infinity;
    let alunoMaiorMedia = "";
  
    // Encontrar o aluno com a maior média
    for (let i = 0; i < medias.length; i++) {
      if (medias[i] > maiorMedia) {
        maiorMedia = medias[i];
        alunoMaiorMedia = nomes[i];
      }
    }
  
    console.log("Aluno com a maior média:", alunoMaiorMedia);
  
    // Verificar se cada aluno não aprovado precisa de nota no exame final
    for (let i = 0; i < medias.length; i++) {
      if (medias[i] < 7) {
        let notaExameFinal = 10 - medias[i]; // Calcula a nota necessária para ser aprovado (considerando a média de aprovação igual a 5)
        console.log(`${nomes[i]} precisa tirar ${notaExameFinal.toFixed(2)} na prova de exame final para ser aprovado.`);
      }
    }
  }