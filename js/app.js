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



