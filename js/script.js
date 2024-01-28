const nav = document .querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerra = document.querySelector("#cerrar");


abrir.addEventListener("click",()=> {
    nav.classList.add("visible");
})

cerra.addEventListener("click",()=>{
    nav.classList.remove("visible");
})


document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("nav");
    const logo = document.querySelector(".logo");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        nav.classList.add("scrolled");
        logo.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
        logo.classList.remove("scrolled");
      }
  
      // Agrega clase específica para el footer
      const footer = document.querySelector("footer");
      const logoFooter = document.querySelector(".logo.footer");
  
      if (footer.getBoundingClientRect().top <= window.innerHeight) {
        logoFooter.classList.add("scrolled");
      } else {
        logoFooter.classList.remove("scrolled");
      }
    });
  });


  // JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const abrirBtn = document.getElementById('abrir');
    const cerrarBtn = document.getElementById('cerrar');
    const nav = document.getElementById('nav');
    const elementosMenu = document.querySelectorAll('.nav-list .item');
  
    abrirBtn.addEventListener('click', function () {
      nav.classList.add('visible');
    });
  
    cerrarBtn.addEventListener('click', function () {
      nav.classList.remove('visible');
    });
  
    // Agrega un manejador de eventos a cada elemento del menú para cerrar el menú al hacer clic
    elementosMenu.forEach(function (elemento) {
      elemento.addEventListener('click', function () {
        nav.classList.remove('visible');
      });
    });
  });