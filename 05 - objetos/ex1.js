/**
 * Crie uma classe para representar um carro.
 * Carros possuem uma marca, uma cor e um gasto médio de combustível por Km rodado.
 * Crie um método que dado a quantidade de Km e o preço do combustível nos dê o valor
 * gasto em reais para realizar este percurso.
 */

class Carro {
    marca;
    cor;
    litrosPorKm;

    constructor(marca, cor, litrosPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.litrosPorKm = litrosPorKm;
    }

    calcularGastoMedio(distancia, precoCombustivel) {
        return (`Para percorrer ${distancia}km serão gastos R$${(distancia * this.litrosPorKm * precoCombustivel).toFixed(2)}`);
    }
}

const uno = new Carro('Fiat', 'Preto', 1/12);
const meriva = new Carro('Ford', 'Chumbo', 1/10);


console.log(uno.calcularGastoMedio(70, 5));