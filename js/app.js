// Metodos del menu en movil y tableta
var menu_oculto = document.querySelector('.menu-oculto');
var menu = document.querySelector('.menu-movil');
var cerrar = document.getElementById('cerrar');

 //Funcion del menu
function toggleMenu(event) {
  this.classList.toggle('menu-act');
  menu_oculto.classList.toggle('menu-activo');
  event.preventDefault();

  if (menu.classList.contains('menu-act')) {
    
    cerrar.innerHTML = 'Cerrar';
  } else{
    cerrar.innerHTML = 'Menu';
  }
}


// evento

menu.addEventListener('click', toggleMenu, false);

//orientacion prueba

function lock (orientation) {
  // Go into full screen first
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.documentElement.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.documentElement.msRequestFullscreen();
  }

  // Then lock orientation
  screen.orientation.lock(orientation);
}
