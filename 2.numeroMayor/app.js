// que numero es mayor
const numero1 = Number(prompt("indica el primer numero"));
const numero2 = Number(prompt("indica el segundo numero"));
const numeroMayor = document.getElementById("numero-mayor");

function calcularDosNumeros(primerNumero, segundoNumero) {
    if (primerNumero > segundoNumero) {
        numeroMayor.innerText = "El número 1 \"" + primerNumero + "\"  es MAYOR que el número 2 \"" + segundoNumero + "\"";

    } else if (primerNumero < segundoNumero) {
        numeroMayor.innerText = "El número 1 \"" + primerNumero + "\"  es MENOR que el número 2 \"" + segundoNumero + "\"";
    } else {
        numeroMayor.innerText = "El número 1 \"" + primerNumero + "\"  es IGUAL que el número 2 \"" + segundoNumero + "\"";
    }
}

calcularDosNumeros(numero1, numero2);


//mejoras

const primerNumero = document.getElementById("primer-numero");
const segundoNumero = document.getElementById("segundo-numero");

const  boton = document.getElementById("calcular");

boton.addEventListener("click", () =>{
    const valor1 = Number(primerNumero.value);
    const valor2 = Number(segundoNumero.value);
   
    calcularDosNumeros(valor1, valor2);
});

