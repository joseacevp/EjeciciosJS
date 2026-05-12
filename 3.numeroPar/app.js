const numero = document.getElementById("numero");
const boton = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", () => {
    const num = parseInt(numero.value); 
    if (isNaN(num)) {
        resultado.innerText = "No hay número introducido.";
        return;
    }

    else if (num % 2 === 0 && num !== 0) {
        resultado.textContent = "El " + num + " es PAR.";
    } 
    else if (num % 2 !== 0) {
        resultado.textContent = "El " + num + " es IMPAR.";
    }else {
        resultado.textContent = "¡¡ES CERO!";
    }
});