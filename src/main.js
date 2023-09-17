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

const txtAnim = document.getElementById('txtAnim');

new Typewriter(txtAnim, {
    deleteSpeed: 5
  })

  .typeString("With our products,")
  .pauseFor(200)
  .typeString('<span style="color: #709ca7"> no more rapes </span>')
  .pauseFor(1000)
  .deleteChars(15)
  .typeString('<span style="color: #709ca7"> no more violence </span>')
  .pauseFor(1000)
  .deleteChars(18)
  .typeString('<span style="color: #709ca7"> no more pilferage </span>')
  .pauseFor(1000)
  .deleteChars(19)
  .typeString('<span style="color: #709ca7"> we all get a better life</span>')
  .start();

  
  


