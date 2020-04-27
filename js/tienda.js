var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
      navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      1224: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
  });



// --------------------------------------------------- Aparicion de carrito

// var original = 'https://emmacreativo.github.io/adrianaweb/tienda.html';
var original = 'http://127.0.0.1:5500/tienda.html';
var carrito =document.getElementById('carritoCompra');
var dir = window.location.href;
//   dir.toString;
  // console.log(dir);

  function observar() {
      if (original == dir) {
          carrito.style.display = 'block';
          console.log('visible');
      } else {
          carrito.style.display = 'none';
      }
  }

  observar();






  // Get the modal
var menucarrito = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("carritoCompra");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("carrito-close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  menucarrito.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  menucarrito.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == menucarrito) {
    menucarrito.style.display = "none";
  }
}
