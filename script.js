// Funciones para el menú móvil
function toggleMenu() {
    const menu = document.getElementById('menu');
    const toggle = document.getElementById('menu-toggle');
    
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
}

// Cerrar menú cuando se haga clic en un enlace
function closeMenu() {
    const menu = document.getElementById('menu');
    const toggle = document.getElementById('menu-toggle');
    
    menu.classList.remove('active');
    toggle.classList.remove('active');
}

// Cerrar menú al hacer clic fuera de la barra de navegación
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const toggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('.header');
    
    if (!nav.contains(event.target) && menu.classList.contains('active')) {
        closeMenu();
    }
});

// Cerrar menú cuando el tamaño de la pantalla cambia
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});