const prompt = require('prompt-sync')({ sigint: true });
let resultado = 0;

function check(num) {
    if (isNaN(num)) {
        console.log('Por favor, insira um número válido.');
        process.exit();
    } else {
        return true;
    }
}

let entrada1 = Number(prompt('Insira o primeiro valor: '));
let operação = prompt('selecione a operação a ser realizada (+;-;*;/;%): ');
let entrada2 = Number(prompt('Insira o segundo valor: '));

check(entrada1);
check(entrada2);

if ((check = true)) {
    switch (operação) {
        case '+':
            resultado = entrada1 + entrada2;
            console.log(`o resultado é ${resultado}`);
            break;
        case '-':
            resultado = entrada1 - entrada2;
            console.log(`o resultado é ${resultado}`);
            break;
        case '*':
            resultado = entrada1 * entrada2;
            console.log(`o resultado é ${resultado}`);
            break;
        case '/':
            if (entrada2 == 0) {
                console.log(`não é possivel dividir por zero, resultado infinito!`);
                break;
            } else {
                resultado = entrada1 / entrada2;
                console.log(`o resultado é ${resultado}`);
            }
        case '%':
            resultado = (entrada1 * entrada2) / 100;
            console.log(`o resultado é ${resultado}`);
            break;
        default:
            console.log('Você não selecionou uma operação válida');
            break;
    }
}
