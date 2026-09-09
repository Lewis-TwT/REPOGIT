// Menú hamburguesa para móviles
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
}

// Validación del formulario de contacto
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (nombre === '' || email === '' || mensaje === '') {
            formMessage.textContent = 'Por favor, completa todos los campos.';
            formMessage.style.color = 'red';
        } else {
            formMessage.textContent = '¡Mensaje enviado con éxito!';
            formMessage.style.color = '#27ae60';
            contactForm.reset();
        }
    });
}

// Mostrar año actual en el footer
const year = new Date().getFullYear();
const footerText = document.querySelector('footer p');
if (footerText) {
    footerText.innerHTML = `&copy; ${year} Mi Sitio Web. Todos los derechos reservados.`;
}
