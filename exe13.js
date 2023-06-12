function exe13() {
    var alunos = []; // Vetor para armazenar os alunos e suas notas
    var somaNotas = 0;
  
    // Preenchendo o nome e a nota de cada aluno
    for (var i = 0; i < 8; i++) {
      var nome = prompt("Digite o nome do " + (i+1) + "º aluno:");
      var nota = parseFloat(prompt("Digite a nota do(a) " + nome + ":"));
      
      alunos.push({ nome: nome, nota: nota });
      somaNotas += nota;
    }
  
    // Mostrando o relatório de notas
    console.log("Relatório de notas:");
  
    for (var j = 0; j < alunos.length; j++) {
      console.log(alunos[j].nome + " = " + alunos[j].nota.toFixed(1));
    }
  
    var mediaClasse = somaNotas / alunos.length;
    console.log("Média da classe = " + mediaClasse.toFixed(1));
  }
  