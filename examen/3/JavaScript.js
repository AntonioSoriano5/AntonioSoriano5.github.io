/***********************************************
* Autor: Jose Antonio Soriano Ortiz            *
* Programa: JavaScript.js                      *
* Version: 1.2                                 *
* Lenguaje: JavaScript                         *
* Fecha: 20/11/2024                            *
* Fuente: Local                                *
* Descripción: Cambiar el color de fondo y el  *
* color del texto según teclas 1-5.            *
* Muestra la tecla presionada en la consola.   *
***********************************************/

document.addEventListener("keydown", function(event) {
    const elemento = document.getElementById("Cuerpo");
    const texto = document.getElementById("Texto");
    const footerTexto = document.getElementById("FooterTexto");

    // Mostrar la tecla presionada en la consola
    console.log(`Tecla presionada: ${event.key}`);

    // Cambiar el fondo y el texto basado en la tecla
    if (event.key === "1") {
        elemento.className = "Cuerpo01"; // Fondo negro, texto blanco
        texto.style.color = "white";
        footerTexto.style.color = "white";
    }

    if (event.key === "2") {
        elemento.className = "Cuerpo02"; // Fondo rojo, texto negro
        texto.style.color = "black";
        footerTexto.style.color = "black";
    }

    if (event.key === "3") {
        elemento.className = "Cuerpo03"; // Fondo azul, texto blanco
        texto.style.color = "white";
        footerTexto.style.color = "white";
    }

    if (event.key === "4") {
        elemento.className = "Cuerpo04"; // Fondo verde, texto negro
        texto.style.color = "black";
        footerTexto.style.color = "black";
    }

    if (event.key === "5") {
        elemento.className = "Cuerpo05"; // Fondo blanco, texto blanco
        texto.style.color = "white";
        footerTexto.style.color = "white";
    }
});
