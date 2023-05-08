let cpfs = ['123.456.789-10', '123.456.789-11', '123.456.789-12']; // Array de cpfs, objeto

//array de tipos primitivos
let nomes = ['Eduardo', 'Maria', 'Joana']; // Array de nomes, string
let numeros = [1, 2, 3, 4, 5]; // Array de numeros, number
let booleanos = [true, false, true]; // Array de booleanos, boolean
let misturado = ['Eduardo', 1, true]; // Array misturado, string, number, boolean

//array de objetos
let clientes = [
    {
        nome: 'Eduardo',
        cpf: '123.456.789-10',
        dependente: true,
        dependentes: [
            {
                nome: 'Sarah',
                parentesco: 'filha',
                dataNasc: '20/03/2011'
            }

        ]
    }

];


function isGreaterThan10(num) {
    switch (num) {
        case 10:
            console.log('é igual a 10');
            break;
        case 20:
            console.log('é igual a 20');
            break;
        default:
            console.log('é diferente de 10 e 20');
            break;
}
}

//numero 10 é diferente de string "10"

//usamos === para comparar o valor e o tipo da variavel,3 iguais é igualdade estrita

console.log(isGreaterThan10("10"));


function teste(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}



//callback

function callback(a, b, c) {
    console.log(a, b, c);
}

const sum = (a, b, fn) => {
    const result = a + b;
    fn(result);
}

sum(2, 2, (result) => {
    console.log(result);
});


let names = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana']; 

names.forEach((name, idx, arr) => { 
    console.log(idx, name, arr);
});

const forEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

names.map((name) => {
    return{
        name: name,
    }
});

console.log(names);




