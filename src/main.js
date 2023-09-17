document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburgerMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

const hello = document.getElementById("intro")
var loader = document.getElementById('preloader')

window.addEventListener('load', function(){
    loader.style.display = "none"
})