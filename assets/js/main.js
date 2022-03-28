/* MOSTRAR Y OCULTAR MENÚ RESPONSIVO */
const navMenu = document.getElementById('nav-menu'),
      navCambiar = document.getElementById('nav-cambiar'),
      navCerrar = document.getElementById('nav-cerrar');

/* MOSTRAR MENÚ */
/* Valida si existe la constante */
if (navCambiar) {
    navCambiar.addEventListener('click', () => {
        navMenu.classList.add('mostrar-menu');
    })
}

/* OCULTAR MENÚ */
/* Valida si existe la constante */
if (navCerrar) {
    navCerrar.addEventListener('click', () => {
        navMenu.classList.remove('mostrar-menu');
    })
}

/* ELIMINAR MENÚ PARA CELULAR */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // Cuando hacemos click en cada nav__link, quitamos la clase "mostrar-menu"
    navMenu.classList.remove('mostrar-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))