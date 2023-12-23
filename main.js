document.addEventListener('copy', function (e) {
  e.preventDefault(); // Empêche l'action de copier par défaut
  alert("La copie de contenu est désactivée sur ce site.");
});

document.addEventListener('cut', function (e) {
  e.preventDefault(); // Empêche l'action de couper par défaut
  alert("La coupe de contenu est désactivée sur ce site.");
});


document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  hamburgerMenu.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

const hello = document.getElementById("intro");
var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

const txtAnim = document.getElementById("txtAnim");
new Typewriter(txtAnim, {
  deleteSpeed: 3,
})

  .typeString("With our products,")
  .pauseFor(200)
  .typeString('<span style="color: #709ca7"> stop to rapes </span>')
  .pauseFor(1500)
  .deleteChars(15)
  .typeString('<span style="color: #709ca7"> no more violence </span>')
  .pauseFor(1500)
  .deleteChars(18)
  .typeString('<span style="color: #709ca7"> no more pilferage </span>')
  .pauseFor(1500)
  .deleteChars(19)
  .typeString(
    '<strong style="color: #709ca7"> we all get a gentle life</strong>'
  )
  .start();

document.addEventListener("DOMContentLoaded", function () {
  // Obtenez tous les éléments h2 (titres de prix)
  var priceTitles = document.querySelectorAll(".product-description h2");

  // Ajoutez un gestionnaire d'événement au clic sur chaque titre de prix
  priceTitles.forEach(function (title) {
    title.addEventListener("click", function () {
      // Trouvez le parent du parent de l'élément cliqué (.product-container)
      var parent = this.parentElement.parentElement;

      // Basculez la classe 'open' sur le parent pour afficher/cacher la description
      parent.classList.add.toggle("open");
    });
  });
});
