const entradas = [5, 50, 10, 98, 23, 44, 13, 32, 87, 59, 7, 3, 0];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {
    gets,
    print
};