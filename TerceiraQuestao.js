const fs = require('fs');

fs.readFile('faturamento.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    const faturamento = JSON.parse(data);
    const valores = faturamento.map(dia => dia.valor).filter(valor => valor > 0);

    const menorFaturamento = Math.min(...valores);
    const maiorFaturamento = Math.max(...valores);
    const somaFaturamento = valores.reduce((a, b) => a + b, 0);
    const mediaMensal = somaFaturamento / valores.length;
    const diasSuperiorMedia = valores.filter(valor => valor > mediaMensal).length;

    console.log(`O menor valor de faturamento em um dia do mês foi: ${menorFaturamento}`);
    console.log(`O maior valor de faturamento em um dia do mês foi: ${maiorFaturamento}`);
    console.log(`Número de dias no mês com faturamento superior à média mensal: ${diasSuperiorMedia}`);
});

/*
Usamos o módulo fs do Node.jspara ler o arquivo JSON.

Filtramos os dias com valor de faturamento maior que 0 para ignorar dias sem faturamento.

Calculamos o menor e maior valor de faturamento.

Calculamos a média mensal de faturamento considerando apenas os dias com faturamento.

Contamos o número de dias com faturamento superior à média mensal.

Para executar este script, você precisará do Node.jsinstalado em sua máquina. Execute o comando node seu_script.js para ver os resultados.
*/