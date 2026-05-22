let nodoContenedorTablas = document.querySelector('.contenedor-tablas');
let nodoContendorTabla = document.querySelector('#contenedor-tabla');

function generarTabla(numero) {
    let tabla = " ";
    for (let i = 1; i <= 10; i++) {
        tabla += numero + ' x ' + i + ' = ' + (numero * i) + '<br>';
    }
    str_html = `<div id="contenedor-tabla">
        <h1>Tablas de Multiplicar del ${numero}</h1>
         <p>${tabla}</p>

      </div>`;
    return str_html;
}


function crearTablas(numeroTablas) {
    let contenido = '';
    for (let i = 0; i <= numeroTablas; i++) {
        contenido += generarTabla(i);
    }
    nodoContenedorTablas.innerHTML = contenido;
}



crearTablas(20);


