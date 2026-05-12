
function calcularDosNumeros() {
    const primerNumero = document.querySelector('#primer-numero');
    const segundoNumero = document.querySelector('#segundo-numero');
    const primerNumeroValor = primerNumero.valueAsNumber;
    const segundoNumeroValor = segundoNumero.valueAsNumber;

    const numeroMayor = document.querySelector('#numero-mayor');
    if (primerNumeroValor > segundoNumeroValor) {
        numeroMayor.innerText = "El número 1 \"" + primerNumeroValor + "\"  es MAYOR que el número 2 \"" + segundoNumeroValor + "\"";

    } else if (primerNumeroValor < segundoNumeroValor) {
        numeroMayor.innerText = "El número 1 \"" + primerNumeroValor + "\"  es MENOR que el número 2 \"" + segundoNumeroValor + "\"";
    } else {
        numeroMayor.innerText = "El número 1 \"" + primerNumeroValor + "\"  es IGUAL que el número 2 \"" + segundoNumeroValor + "\"";
    }
}







