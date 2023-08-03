/**
 * Faça um programa que receba a média de um aluno
 * caso a média seja < 5 imprima "reprovado"
 * caso a média seja >= 5 imprima "recuperação"
 * caso a média seja >= 7 imprima "aprovado"
 */
const { gets, print } = require('./funcoesAuxiliares');

const media = gets();
if (media >= 0 && media < 5) {
    print('\nAluno reprovado');
} else if (media >= 5 && media < 7) {
    print('\nAluno em recuperação');
} else {
    print('\nAluno aprovado');
}