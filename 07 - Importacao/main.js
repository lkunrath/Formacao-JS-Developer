const { gets, print } = require('./funcoesAuxiliares');

const qtdAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < qtdAlunos; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);