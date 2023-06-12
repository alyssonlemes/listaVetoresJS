function exe16() {
    var produtos = []; // Vetor para armazenar os nomes dos produtos
    var precos = []; // Vetor para armazenar os preços dos produtos
    var quantidadeInferior50 = 0;
    var nomeEntre50e100 = [];
    var somaPrecoSuperior100 = 0;
    var quantidadePrecoSuperior100 = 0;
  
    // Preenchendo o nome e o preço de cada produto
    for (var i = 0; i < 5; i++) {
      var nome = prompt("Digite o nome do produto " + (i + 1) + ":");
      var preco = parseFloat(prompt("Digite o preço do produto " + nome + ":"));
  
      produtos.push(nome);
      precos.push(preco);
  
      if (preco < 50) {
        quantidadeInferior50++;
      } else if (preco >= 50 && preco <= 100) {
        nomeEntre50e100.push(nome);
      } else if (preco > 100) {
        somaPrecoSuperior100 += preco;
        quantidadePrecoSuperior100++;
      }
    }
  
    // Calculando a média dos preços dos produtos com preço superior a 100
    var mediaPrecoSuperior100 = somaPrecoSuperior100 / quantidadePrecoSuperior100;
  
    // Mostrando os resultados
    console.log("Quantidade de produtos com preço inferior a 50: " + quantidadeInferior50);
    console.log("Produtos com preço entre 50 e 100: " + nomeEntre50e100.join(", "));
    console.log("Média dos preços dos produtos com preço superior a 100: " + mediaPrecoSuperior100.toFixed(2));
  }