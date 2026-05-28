const nodoBtnFuego = document.querySelector(".btn-fuego");
const nodoBtnAgua = document.querySelector(".btn-agua");
const nodoBtnTierra = document.querySelector(".btn-tierra");

nodoBtnFuego.addEventListener("click", function() {
    const nodoImagenesFuego = document.querySelectorAll(".imagen-fuego");
    for (const nodeImagen of nodoImagenesFuego) {
        nodeImagen.classList.toggle("oculto");
    }
});

nodoBtnAgua.addEventListener("click", function() {
    const nodoImagenesAgua = document.querySelectorAll(".imagen-agua");
    for (const nodeImagen of nodoImagenesAgua) {
        nodeImagen.classList.toggle("oculto");
    }
});

nodoBtnTierra.addEventListener("click", function() {
    const nodoImagenesTierra = document.querySelectorAll(".imagen-tierra");
    for (const nodeImagen of nodoImagenesTierra) {
        nodeImagen.classList.toggle("oculto");
    }
});