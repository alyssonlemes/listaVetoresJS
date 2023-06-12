function exe15() {
    var clientes = []; // Vetor para armazenar os nomes dos clientes
    var locacoes2023 = []; // Vetor para armazenar a quantidade de locações em 2023 de cada cliente
  
    // Preenchendo o nome e a quantidade de locações de cada cliente
    for (var i = 0; i < 8; i++) {
      var nome = prompt("Digite o nome do cliente " + (i + 1) + ":");
      var locacoes = parseInt(prompt("Digite a quantidade de locações de " + nome + " em 2023:"));
  
      clientes.push(nome);
      locacoes2023.push(locacoes);
    }
  
    // Mostrando o nome dos clientes com a quantidade de locações que têm direito
    console.log("Clientes e quantidade de locações que têm direito:");
  
    for (var j = 0; j < clientes.length; j++) {
      var locacoesGratis = Math.floor(locacoes2023[j] / 10); // Calculando a quantidade de locações grátis
  
      console.log(clientes[j] + " - Locações: " + locacoes2023[j] + " - Locações grátis: " + locacoesGratis);
    }
  }
  