const fs = require('node:fs');
const path = require('node:path');

function calcularComissoes(dados) {
  const totais = new Map();

  for (const venda of dados.vendas) {
    // Trabalha com centavos inteiros para evitar erros de ponto flutuante.
    const valorEmCentavos = Math.round(venda.valor * 100);
    let percentual;

    if (valorEmCentavos < 10000) {
      percentual = 0;
    } else if (valorEmCentavos < 50000) {
      percentual = 1;
    } else {
      percentual = 5;
    }

    // Guarda centésimos de centavo e arredonda apenas o total do vendedor.
    const comissao = valorEmCentavos * percentual;
    totais.set(venda.vendedor, (totais.get(venda.vendedor) ?? 0) + comissao);
  }

  return new Map(
    [...totais].map(([vendedor, total]) => [vendedor, Math.round(total / 100)])
  );
}

function main() {
  const arquivo = path.join(__dirname, 'vendas.json');
  const dados = JSON.parse(fs.readFileSync(arquivo, 'utf8'));
  const moeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  for (const [vendedor, comissaoEmCentavos] of calcularComissoes(dados)) {
    console.log(`${vendedor}: ${moeda.format(comissaoEmCentavos / 100)}`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { calcularComissoes };
