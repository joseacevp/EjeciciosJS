function isImpar(num) {
    if (num % 2 === 0) {
        console.log(num + ' es un número par');
        return false;
    } 
    return true;
}
function sumarImpares(num) {
    let suma = 0;
    for (let i = 0; i <= num; i++) {
        if (isImpar(i)) {
            suma += i;
        }
    }
    return suma;
}
const nodoResultado = document.querySelector('#resultado');
const nodoNumero = document.querySelector('#numero');

function calcularSuma() {
    nodoResultado.innerHTML = sumarImpares(parseInt(nodoNumero.value));
}