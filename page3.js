/*
Script para controlar el carrusel con las flechas del teclado.
*/

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const carouselContainer = document.querySelector('.carousel-container');

// Función para actualizar el carrusel
function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

// Eventos de teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        // Flecha izquierda: retrocede
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    } else if (event.key === 'ArrowRight') {
        // Flecha derecha: avanza
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }
});

// Inicializar el carrusel
updateCarousel();// JavaScript Document