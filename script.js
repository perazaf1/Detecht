document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez les éléments du DOM une seule fois pour améliorer les performances
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");
  const hello = document.getElementById("intro");
  const loader = document.getElementById("preloader");
  const txtAnim = document.getElementById("txtAnim");
  const priceTitles = document.querySelectorAll(".product-description h2");

  // Utilisez des fonctions nommées pour clarifier le code et éviter les duplications
  function toggleNavLinks() {
    navLinks.classList.toggle("active");
  }

  function hideLoader() {
    loader.style.display = "none";
  }

  // Utilisez une seule instance de Typewriter pour améliorer la lisibilité
  const typewriter = new Typewriter(txtAnim, {
    deleteSpeed: 3,
  });

  typewriter
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

  // Utilisez forEach pour ajouter un gestionnaire d'événements à plusieurs éléments
  priceTitles.forEach(function (title) {
    title.addEventListener("click", function () {
      // Utilisez closest pour trouver le parent '.product-container'
      var parent = this.closest(".product-container");

      // Utilisez classList.toggle pour basculer la classe 'open' sur le parent
      parent.classList.toggle("open");
    });
  });

  // Ajoutez des gestionnaires d'événements pour le menu hamburger et le chargement de la page
  hamburgerMenu.addEventListener("click", toggleNavLinks);
  window.addEventListener("load", hideLoader);
});
