const botonStart = document.getElementById("start");

//funcion para iniciar las preguntas con el boton start
function iniciar() {
    //mide el tiempo de las respuestas
    const tiempoInicio = Date.now();

    //pregunta el nombre
    const nombre = prompt("Indica tu Nombre:")

    if (nombre === "") {
        alert("Es necesario indicar un nombre. ")
        throw new Error("Recarga la página para intentarlo de nuevo.")
    } else {
        alert("Hola " + nombre)
    }



    //pregunta 1
    const respuesta1 = prompt(nombre + ": Cual es la Capital de España:")

    if (respuesta1.toLowerCase() !== "madrid") {
        alert("Tienes que estudiar mas, " + nombre + ". Recarga la pagina")
        throw new Error("Respuesta incorrecta. Recarga la página para intentarlo de nuevo.")
    } else {
        alert("Respuesta, CORRECTA.")
    }

    //pregunta 2
    const respuesta2 = prompt(nombre + ": Cual es el nombre del satélite natural de la Tierra:")

    if (respuesta2.toLowerCase() !== "luna") {
        alert("Tienes que estudiar mas, " + nombre + ". Recarga la pagina")
        throw new Error("Respuesta incorrecta. Recarga la página para intentarlo de nuevo.")
    } else {
        alert("Respuesta, CORRECTA.")
    }

    // pregunta3
    const respuesta3 = prompt(nombre + ": Cual es el idioma que se habla en España:")

    if (respuesta3.toLowerCase() !== "español") {
        alert("Tienes que estudiar mas, " + nombre + ". Recarga la pagina")
        throw new Error("Respuesta incorrecta. Recarga la página para intentarlo de nuevo.")
    } else {
        alert("Respuesta, CORRECTA.")
    }
    const tiempoFinal = Date.now();

    alert("FELICIDADAS " + nombre + " has acertado todas las preguntas, con un tiempo empleado de: " + ((tiempoFinal - tiempoInicio) / 1000).toFixed(2) + " segundos");
}
botonStart.addEventListener("click", iniciar)