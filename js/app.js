// Metodos del menu en movil y tableta
const cerrar_menu = document.getElementById('cerrar');
const menu_oculto = document.getElementById('menuOculto');

// cerrar
cerrar_menu.addEventListener('click', function() {
  menu_oculto.style.transform = "translateY(-100vh)";
  menu_oculto.style.transition = ".5s ease-in-out";
});

// abrir


// Navegacion de la pagina principal 
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});