const nav = document .querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerra = document.querySelector("#cerrar");


abrir.addEventListener("click",()=> {
    nav.classList.add("visible");
})

cerra.addEventListener("click",()=>{
    nav.classList.remove("visible");
})