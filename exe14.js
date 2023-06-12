function exe14() {
    var alunos = []; // Vetor para armazenar os alunos e suas notas
    var somaNotas = 0;
    var aprovados = 0;
    var reprovados = 0;
  
    // Preenchendo o nome e as notas de cada aluno
    for (var i = 0; i < 6; i++) {
      var nome = prompt("Digite o nome do aluno " + (i + 1) + ":");
      var nota1 = parseFloat(prompt("Digite a primeira nota do(a) " + nome + ":"));
      var nota2 = parseFloat(prompt("Digite a segunda nota do(a) " + nome + ":"));
  
      var media = (nota1 + nota2) / 2;
      var situacao = media >= 6 ? "Aprovado" : "Reprovado";
  
      alunos.push({ nome: nome, nota1: nota1, nota2: nota2, media: media, situacao: situacao });
  
      somaNotas += media;
  
      if (situacao === "Aprovado") {
        aprovados++;
      } else {
        reprovados++;
      }
    }
  
    // Calculando média da classe e percentuais de alunos aprovados/reprovados
    var mediaClasse = somaNotas / alunos.length;
    var percentualAprovados = (aprovados / alunos.length) * 100;
    var percentualReprovados = (reprovados / alunos.length) * 100;
  
    // Mostrando o relatório de notas
    console.log("Relatório de notas:");
  
    for (var j = 0; j < alunos.length; j++) {
      console.log("Aluno: " + alunos[j].nome);
      console.log("1ª prova: " + alunos[j].nota1);
      console.log("2ª prova: " + alunos[j].nota2);
      console.log("Média: " + alunos[j].media.toFixed(1));
      console.log("Situação: " + alunos[j].situacao);
      console.log("--------------------");
    }
  
    console.log("Média da classe: " + mediaClasse.toFixed(1));
    console.log("Percentual de alunos aprovados: " + percentualAprovados.toFixed(1) + "%");
    console.log("Percentual de alunos reprovados: " + percentualReprovados.toFixed(1) + "%");
  }
  