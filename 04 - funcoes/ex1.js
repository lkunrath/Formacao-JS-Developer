/** REFATORAÇÃO
 * 
 * O IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre
 * a condição de pesod e uma pessoa adulta.
 * 
 * Fórmula do IMC: 
 * IMC = peso / (altura * altura)
 * 
 * Elabore um algoritmo que, dado o peso e a altura de um adulto mostre a sua condição de acordo com a tabela
 * abaixo.
 * 
 * IMC em adultos:
 *  Abaixo de 18.5 - Abaixo do peso;
 *  Entre 18.5 e 25 - Peso normal;
 *  Entre 25 e 30 - Acima do peso;
 *  Entre 30 e 40 - Obeso;
 *  Acima de 40 - Obesidade grave;
 */

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificaIMC(imc) {
    if (imc < 18.5) {
        return ('\nIMC = ' + imc.toFixed(2) + ' Abaixo do peso.\n');
    } else if (peso >= 18.5 && peso <= 25) {
        return ('\nIMC = ' + imc.toFixed(2) + ' Peso normal.\n');
    } else if (peso >= 25 && peso <= 30) {
        return ('\nIMC = ' + imc.toFixed(2) + ' Acima do peso.\n');
    } else if (peso >= 30 && peso <= 40) {
        return ('\nIMC = ' + imc.toFixed(2) + ' Obesidade.\n');
    } else {
        return ('\nIMC = ' + imc.toFixed(2) + ' Obesidade grave.\n');
    }
}

const peso = 45;
const altura = 1.56;
const imc = calcularIMC(peso, altura);
console.log(classificaIMC(imc));

