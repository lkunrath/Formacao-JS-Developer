
/**Faça um programa para calcular o valor de uma viagem de carro
   * 
   * Você terá 3 variáveis. Sendo elas:
   *    1 - Preço da gasolina;
   *    2 - Preço do etanol;
   *    3 - Tipo de combustível no carro;
   *    4 - Gasto médio de combustível por km rodado;
   *    5 - Distância em km a ser percorrida;
   * 
   * Imprima no console o valor que será gasto para realizar essa viagem.
   */

const precoGasolina = 5.641;
const precoEtanol = 6.587
const kmPorLitros = 10;
let distanciaPercorridaKm = 100;

const tipoCombustivel = 'Etanol';

if (tipoCombustivel === 'Etanol') {
    const gastoMedio = (distanciaPercorridaKm / kmPorLitros) * precoEtanol;
    console.log('\nR$ ' + gastoMedio.toFixed(2) + ' com Etanol\n'); //toFixed é usado para arredondar os números

} else {
    const gastoMedio = (distanciaPercorridaKm / kmPorLitros) * precoGasolina;
    console.log('\nR$ ' + gastoMedio.toFixed(2) + ' com Gasolina\n'); //toFixed é usado para arredondar os números
}