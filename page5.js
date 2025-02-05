/*
Script para controlar el carrusel con botones de navegación.
Cada botón avanza o retrocede 3 imágenes.
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

// Eventos de clic en los botones
document.getElementById('prevButton').addEventListener('click', () => {
    currentIndex = (currentIndex - 3 + totalSlides) % totalSlides; // Retrocede 3 imágenes
    updateCarousel();
});

document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 3) % totalSlides; // Avanza 3 imágenes
    updateCarousel();
});

// Inicializar el carrusel
updateCarousel();