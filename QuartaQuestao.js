const faturamentoMensal = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

const valorTotalMensal = Object.values(faturamentoMensal).reduce((acc, curr) => acc + curr, 0);

for (let estado in faturamentoMensal) {
    let percentual = (faturamentoMensal[estado] / valorTotalMensal) * 100;
    console.log(`O percentual de representação de ${estado} é: ${percentual.toFixed(2)}%`);
}
