/**
 * Crie uma classe para representar pessoas.
 * Para cada pessoa teremos os atributos nome, peso e altura.
 * As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso/(altura * altura))
 * Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC
 */

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarIMC(){
        const imc = this.calcularIMC();
        if (imc < 18.5) {
            return ('\nIMC = ' + imc.toFixed(2) + ' Abaixo do peso.\n');
        } else if (imc >= 18.5 && imc <= 25) {
            return ('\nIMC = ' + imc.toFixed(2) + ' Peso normal.\n');
        } else if (imc >= 25 && imc <= 30) {
            return ('\nIMC = ' + imc.toFixed(2) + ' Acima do peso.\n');
        } else if (imc >= 30 && imc <= 40) {
            return ('\nIMC = ' + imc.toFixed(2) + ' Obesidade.\n');
        } else {
            return ('\nIMC = ' + imc.toFixed(2) + ' Obesidade grave.\n');
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.calcularIMC());
console.log(jose.classificarIMC());
