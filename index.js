function soma() {
    let soma = 1 + 1;
    console.log(soma);
};

function subtracao() {
    let subtracao = 2 - 1;
    console.log(subtracao);
}

function multiplicacao() {
    let multiplicacao = 2 * 2;
    console.log(multiplicacao);
}

function divisao() {
    let divisao = 4 / 2;
    console.log(divisao);
}

soma();
console.log('-----------------');
subtracao();
console.log('-----------------');
multiplicacao();
console.log('-----------------');
divisao();
console.log('-----------------');

function epar() {
    if (2 % 2 === 0) {
        console.log('é par');
    } else {
        console.log('é impar');
    }

}

epar();