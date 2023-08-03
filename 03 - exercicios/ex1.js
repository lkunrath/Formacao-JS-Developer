/**Faça um algoritmo que, dado as 3 notas de um aluno em seu semestre da faculdade, calcule e imprima
 * a sua média e sua classificação conforme a tabela abaixo:
 * 
 * Média = (nota 1 + nota 2 + nota 3) /3
 * 
 * Classificação:
 *  média < 5 = reprovado
 *  5 > média < 7 = recuperação
 *   média > 7 = aprovado
 */

const nota1 = 5;
const nota2 = 6;
const nota3 = 8

const mediaSemestre = (nota1 + nota2 + nota3) / 3;

if (mediaSemestre < 5) {
    console.log('\nMédia do semestre = ' + mediaSemestre.toFixed(1) + '\nAluno reprovado!\n');
} else if (mediaSemestre >= 5 && mediaSemestre <= 7) {
    console.log('\nMédia do semestre = ' + mediaSemestre.toFixed(1) + '\nAluno em recuperação!\n');
} else {
    console.log('\nMédia do semestre = ' + mediaSemestre.toFixed(1) + '\nAluno aprovado!\n');
}