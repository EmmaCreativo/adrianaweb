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

// Cambio de color del menu dependiendo del fondo

// const nav = document.querySelector('.nav'); 
// const obser = document.querySelector('.swiper-slide');
// const opcions = {
//   rootMargin: '-100px 0px 0px -100px'
// };

// const observer = new IntersectionObserver(function (entries) {
//   entries.forEach(entry => {
//     // console.log(entry.target);
//     if(!entry.isIntersecting){
//       nav.classList.add('color-cambio');
//       console.log('sirve');
//     } else{
//       nav.classList.remove('color-cambio');
//     }
//   });


// }, opcions);


// observer.observe(obser);









 // prueba para carrito

// var original = 'http://127.0.0.1:5500/EstudioGaleria.html';

// var dir = window.location.href;
// //   dir.toString;
//   console.log(dir);

//   function observar() {
//       if (original == dir) {
//           alert("es igual");
//       } else {
//           alert("no es igual");
//       }
//   }

//   observar();