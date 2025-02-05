// Aquí puedes agregar cualquier funcionalidad adicional en JavaScript si es necesario.
// Por ejemplo, podrías agregar más interacciones o animaciones complejas.

// Ejemplo de cómo podrías agregar una animación adicional al hacer clic en una imagen
document.querySelectorAll('.animated-image').forEach(image => {
    image.addEventListener('click', () => {
        image.style.transform = 'scale(0.9)';
        setTimeout(() => {
            image.style.transform = 'scale(1.1)';
        }, 100);
    });
});