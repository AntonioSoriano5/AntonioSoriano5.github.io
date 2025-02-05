/*
Script para controlar el carrusel automáticamente cada 10 segundos.
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

// Función para avanzar automáticamente
function autoAdvance() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

// Iniciar el carrusel automático cada 10 segundos
setInterval(autoAdvance, 10000);

// Inicializar el carrusel
updateCarousel();