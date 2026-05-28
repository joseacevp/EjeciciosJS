

function openPopup() {
    
    str_html = `
     <div class="popup" id="popup">
         <h2>Modal title</h2>
            <p>Woohoo, you´re reading this text in a modal!</p>
            <button id="close-btn">Cerrar</button>
            <button id=""Save-btn">Guardar</button>
    `
    const popup = document.querySelector(".contenedor");
    document.body.style.backgroundColor = "rgba(72, 69, 69, 0.5)";
    popup.innerHTML = str_html;
    
}

function closePopup() {
    const popup = document.querySelector("#popup");
    popup.innerHTML = "";
}