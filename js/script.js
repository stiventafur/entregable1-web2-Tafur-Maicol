// Función para activar/desactivar el menú móvil
function toggleMenu() {
    const menu = document.getElementById('menu');   // Accedemos al menú
    const toggle = document.getElementById('menu-toggle');  // Accedemos al ícono del menú

    menu.classList.toggle('active');  // Alternamos la clase 'active' para mostrar/ocultar
    toggle.classList.toggle('active');  // Lo mismo para el ícono del menú
}

// Cerrar el menú al hacer clic en un enlace
function closeMenu() {
    const menu = document.getElementById('menu');
    const toggle = document.getElementById('menu-toggle');

    menu.classList.remove('active');  // Eliminamos la clase 'active'
    toggle.classList.remove('active');  // Lo mismo para el ícono
}

// Cerrar el menú si se hace clic fuera de la barra de navegación
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const toggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.header');

    if (!nav.contains(event.target) && menu.classList.contains('active')) {
        closeMenu();  // Si clicas fuera, cerramos el menú
    }
});

// Cerrar el menú al cambiar el tamaño de la ventana
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMenu();  // Si la ventana se hace más grande, cerramos el menú
    }
});
