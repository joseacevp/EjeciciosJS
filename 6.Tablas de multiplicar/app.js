let nodoContenedorTablas = document.querySelector('.contenedor-tablas');


function generarTabla(numero) {
    let titulo = '<h2>' + 'Tabla del ' + numero + '</h2>';
    let lista = '<ul>';
    for (let i = 1; i <= 10; i++) {
        lista += '<li>' + numero + ' x ' + i + ' = ' + (numero * i) + '</li>';
    }
    lista += '</ul>';
    return titulo + lista;
}


function crearTablas(numeroTablas) {
    let contenido = '';
    for (let i = 1; i <= numeroTablas; i++) {
        contenido += generarTabla(i);
    }
    nodoContenedorTablas.innerHTML = contenido;
}



crearTablas(10);
