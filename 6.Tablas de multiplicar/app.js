



let nodoTabla = document.querySelector('.contenedor-tabla');

function generarTabla(numero) {
    let titulo = '<h2>' + 'Tabla del ' + numero + '</h2>';

    let lista = '<ul>';
    for (let i = 1; i <= 10; i++) {
        lista += '<li>' + numero + ' x ' + i + ' = ' + (numero * i) + '</li>';

    }
    lista += '</ul>';
    nodoTabla.innerHTML = titulo + lista;
}

generarTabla(1);
