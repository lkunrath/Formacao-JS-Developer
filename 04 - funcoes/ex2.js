/**REFATORAÇÃO
 * 
 * Elabore um algoritmo que calcule o preço que deve ser pago por um produto, considerando o preço normal de 
 * etiqueta e a escolha da condição de pagamento.
 * Utilize os códigos da tabela abaixo para ler qual a condição de pagamento escolhida e efetuar o cálculo 
 * adequado.
 * 
 * Código Condição de Pagamento:
 * 1 À vista crédito, recebe 10% off
 * 2 À vista no débito, dinheiro ou pix, recebe 15% off
 * 3 Em 2X, preço normal, sem juros
 * 4 Em 3X ou mais, acréscimo de 10% de juros ao preço normal
*/

function aplicarDesconto(valor, desconto) {
    return '\nPreço a ser pago: R$' + (valor = valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return '\nPreço a ser pago: R$' + (valor = valor + (valor * (juros / 100)));
}

let precoProduto = 100;
const formaPagamento = 1;

if (formaPagamento === 1) {
    console.log(aplicarDesconto(precoProduto, 10));
} else if (formaPagamento === 2) {
    console.log(aplicarDesconto(precoProduto, 10));
} else if (formaPagamento === 3) {
    console.log('\nPreço a ser pago: R$' + precoProduto + '\n');
} else {
    console.log(aplicarJuros(precoProduto, 10));
}