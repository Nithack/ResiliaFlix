
//Adicionando sidebar e evento de click
const btn = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar");
btn.addEventListener("click", e => {
    navbar.classList.toggle("sidebar-open")

})