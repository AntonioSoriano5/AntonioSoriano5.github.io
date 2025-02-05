/*
Script para controlar el carrusel con botones de navegación.
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
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
});

// Inicializar el carrusel
updateCarousel();