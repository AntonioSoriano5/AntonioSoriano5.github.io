/*
Autor: Jose Antonio Soriano Ortiz
Versión: 3.7
Fecha: 03 de Febrero de 2025
Descripción: Script para controlar el carrusel con el teclado y la transición automática cada 10 segundos.
*/

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const carouselContainer = document.querySelector('.carousel-container');
const description = document.getElementById('description');

// Función para actualizar el carrusel
function updateCarousel() {
    const offset = -currentIndex * 10;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

// Eventos de teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') nextSlide();
    else if (event.key === 'ArrowLeft') prevSlide();
});

// Eventos de clic en los botones
document.getElementById('nextButton').addEventListener('click', nextSlide);
document.getElementById('prevButton').addEventListener('click', prevSlide);

function nextSlide() { 
    currentIndex = (currentIndex + 1) % totalSlides; 
    updateCarousel(); 
}

function prevSlide() { 
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    updateCarousel(); 
}

// Auto avance
setInterval(nextSlide, 10000);

updateCarousel();