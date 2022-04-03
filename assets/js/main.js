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
});

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

/* SECCIÓN ACTIVA */
const secciones = document.querySelectorAll('section[id]');

function scrollActivo() {
    const scrollY = window.pageYOffset;

    secciones.forEach(actual => {
        const alturaSeccion = actual.offsetHeight;
        const topSeccion = actual.offsetTop - 50;
        idSeccion = actual.getAttribute('id')

        if (scrollY > topSeccion && scrollY <= topSeccion + alturaSeccion) {
            document.querySelector('.nav__menu a[href*=' + idSeccion + ']').classList.add('enlace-activo');
        } else {
            document.querySelector('.nav__menu a[href*=' + idSeccion + ']').classList.remove('enlace-activo');
        }
    });
}

window.addEventListener('scroll', scrollActivo);

/* CAMBIR FONDO ENCABEZADO */
function scrollHeader() {
    const nav = document.getElementById('header');
    // Cuando el scroll es mayor a 200 viewport height, agrega la clase scroll-header a la etiqueta header
    if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/* MOSTRAR SCROLL HACIA ARRIBA */ 
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // Cuando el scroll es más alto que 560 viewport height, añade la clase show-scroll a la etiqueta a con la clase scroll-up
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/* TEMA CLARO/OSCURO */ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Tema seleccionado previamente (si lo seleccionó el usuario)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtenemos el tema actual que tiene la interfaz validando la clase dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// Validamos si el usuario seleccionó un tema antes
if (selectedTheme) {
  // Si la validación se satisface, preguntamos qué pasó para saber si activamos o desactivamos el oscuro
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activa/desactiva el tema manualmente con el botón
themeButton.addEventListener('click', () => {
    // Añade o elimina el oscuro/iconTheme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Guardamos el tema e ícono actuales que el usuario eligió
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})