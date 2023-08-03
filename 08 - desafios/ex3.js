/**
 * Faça um programa que calcule e imprima o salário a ser transferido para um funcionário
 * Para realizar o cálculo, receba o valor bruto do salário e o adicional dos benefícios
 * O salário a ser transferido é calculado da seguinte maneira:
 * 
 *  valor bruto do salário - percentual de imposto mediante a faixa salarial +adicional dos benefícios
 * 
 * Para calcular o percentual de imposto segue as aliquotas:
 *      de R$ 0.00 a R$ 1100.00 = 5.00%
 *      de R$ 1100.00 a R$ 2500.00 = 10.00%
 *      maior que R$ 2500.00 = 15.00%
 */

const { gets, print } = require('./funcoesAuxiliares');

const valorSalarioBruto = gets();
const valorBeneficios = gets();

if (valorSalarioBruto > 0 && valorSalarioBruto <= 1100) {
    valorSalarioBruto == (valorSalarioBruto - (valorSalarioBruto * 0.05)) + valorBeneficios;
    print("O valor a ser tranferido é de R$ " + valorSalarioBruto);
} else if (valorSalarioBruto > 1100 && valorSalarioBruto <= 2500) {
    valorSalarioBruto == (valorSalarioBruto - (valorSalarioBruto * 0.1)) + valorBeneficios;
    print("O valor a ser tranferido é de R$ " + valorSalarioBruto);
} else {
    valorSalarioBruto == (valorSalarioBruto - (valorSalarioBruto * 0.15)) + valorBeneficios;
    print("O valor a ser tranferido é de R$ " + valorSalarioBruto);
}