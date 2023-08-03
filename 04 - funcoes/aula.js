
function main() {
    function sayMyName(name) {
        return ('Your name is: ' + name);
    }

    sayMyName('Lara');

    function quadrado(valor) {
        return valor * valor
    }

    const quadradoDez = quadrado(10);
    console.log(quadradoDez);

    function verificaIdade(idade) {
        if (idade >= 18) {
            return 'É maior de idade!\n';
        }
        return 'É menor de idade!\n';
    }

    verificaIdade(15);
}

main();