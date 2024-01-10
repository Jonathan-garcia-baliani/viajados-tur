const nav = document .querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerra = document.querySelector("#cerrar");


abrir.addEventListener("click",()=> {
    nav.classList.add("visible");
})

cerra.addEventListener("click",()=>{
    nav.classList.remove("visible");
})


var header =document.getElementById('header');

window.addEventListener('scroll',()=> {
    var scroll = window.scrollY

    if (scroll>10) {
        header.style.backgroundColor = '#121212'
    }else {
        header.style.backgroundColor = 'transparent'
    }
})