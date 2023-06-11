function exe9() {
    let nomes = [];
    let codigos = [];
    let precos = [];
  
    // Preencher os vetores com os nomes, códigos e preços dos produtos
    for (let i = 0; i < 10; i++) {
      nomes.push(prompt(`Informe o nome do produto ${i+1}:`));
      codigos.push(Number(prompt(`Informe o código do produto ${i+1}:`)));
      precos.push(Number(prompt(`Informe o preço do produto ${i+1}:`)));
    }
  
    console.log("Relatório de produtos com aumento:");
  
    // Verificar e exibir informações dos produtos que sofrerão aumento
    for (let i = 0; i < 10; i++) {
      let novoPreco = precos[i]; // Preço inicialmente é o mesmo do vetor
  
      if (codigos[i] % 2 === 0 || precos[i] > 1000) {
        if (codigos[i] % 2 === 0 && precos[i] > 1000) {
          novoPreco += precos[i] * 0.2; // Aumento de 20% para produtos que satisfazem ambas as condições
        } else if (codigos[i] % 2 === 0) {
          novoPreco += precos[i] * 0.15; // Aumento de 15% para produtos que satisfazem apenas a condição de código
        } else {
          novoPreco += precos[i] * 0.1; // Aumento de 10% para produtos que satisfazem apenas a condição de preço
        }
  
        console.log("Nome:", nomes[i]);
        console.log("Código:", codigos[i]);
        console.log("Preço atual:", precos[i]);
        console.log("Novo preço:", novoPreco.toFixed(2));
        console.log("------------------------");
      }
    }
  }