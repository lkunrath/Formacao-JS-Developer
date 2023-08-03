  
  /**Faça um programa para calcular o valor de uma viagem de carro
   * 
   * Você terá 3 variáveis. Sendo elas:
   *    1 - Preço do combustível;
   *    2 - Gasto médio de combustível por km rodado;
   *    3 - Distância em km a ser percorrida;
   * 
   * Imprima no console o valor que será gasto para realizar essa viagem.
   */

  const precoCombustivel = 5.641;
  const kmPorLitros = 12;
  let distanciaPercorridaKm = 500;

  const gastoMedio = (distanciaPercorridaKm/kmPorLitros) * precoCombustivel;

  console.log('R$ ' + gastoMedio.toFixed(2)); //toFixed é usado para arredondar os números
