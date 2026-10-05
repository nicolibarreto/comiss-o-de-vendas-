# Comissão de vendas

Programa em JavaScript que lê `vendas.json` e calcula a comissão total de cada vendedor.

## Regras por venda

| Valor da venda | Comissão |
| --- | --- |
| Abaixo de R$ 100,00 | 0% |
| De R$ 100,00 até abaixo de R$ 500,00 | 1% |
| A partir de R$ 500,00 | 5% |

As comissões são somadas por vendedor e o total é arredondado para centavos ao final.
Os valores de venda no JSON devem ser não negativos e ter no máximo duas casas decimais.

## Executar

Requer Node.js 18 ou superior. Não há dependências para instalar.

```bash
npm start
```

Também é possível executar diretamente:

```bash
node comissoes.js
```

## Resultado com os dados fornecidos

```text
João Silva: R$ 495,68
Maria Souza: R$ 465,95
Carlos Oliveira: R$ 379,37
Ana Lima: R$ 404,98
```

Para usar outras vendas, edite `vendas.json`, mantendo a estrutura:

```json
{
  "vendas": [
    { "vendedor": "Nome do vendedor", "valor": 500.00 }
  ]
}
```
