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

function irApartado() {
    const navMenu = document.getElementById('nav-menu');
    // Cuando hacemos click en cualquier nav__link, quitamos la clase "mostrar-menu"
    navMenu.classList.remove('mostrar-menu');
}
navLink.forEach(n => n.addEventListener('click', irApartado));

/* HABILIDADES ACORDEÓN */
const contenidoHabilidades = document.getElementsByClassName('contenido__habilidades'),
      cabeceraHabilidades = document.querySelectorAll('.cabecera__habilidades');  

function cambiarHabilidades() {
    let claseItem = this.parentNode.className;

    for(i = 0; i < contenidoHabilidades.length; i++) {
        contenidoHabilidades[i].className = 'contenido__habilidades habilidades__cerrado';
    }
    if(claseItem === 'contenido__habilidades habilidades__cerrado') {
        this.parentNode.className = 'contenido__habilidades habilidades__abierto';
    }
}
cabeceraHabilidades.forEach((el) => el.addEventListener('click', cambiarHabilidades));

/* TABS DE HABILITACIÓN */
const tabs = document.querySelectorAll('[data-target]'),
      tabContenidos = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContenidos.forEach(tabContenido => {
            tabContenido.classList.remove('habilitacion__activo');
        })
        target.classList.add('habilitacion__activo');
        tabs.forEach(tab => {
            tab.classList.remove('habilitacion__activo');
        })
        tab.classList.add('habilitacion__activo');
    })
})

/* SWIPER PROYECTOS */
let swiper = new Swiper(".contenedor__proyectos", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});