document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const menuDropdown = document.querySelector(".menu-dropdown");

  // Alternar visibilidad del menú cuando se hace clic en el botón
  menuButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Evita que el evento se propague al document
    menuDropdown.style.display =
      menuDropdown.style.display === "block" ? "none" : "block";
  });

  // Cerrar el menú cuando se hace clic fuera de él
  document.addEventListener("click", function (event) {
    if (
      !menuDropdown.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      menuDropdown.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const menuDropdown = document.querySelector(".menu-dropdown");

  menuButton.addEventListener("click", function (event) {
    event.stopPropagation();
    menuDropdown.classList.toggle("show");
  });

  document.addEventListener("click", function (event) {
    if (
      !menuDropdown.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      menuDropdown.classList.remove("show");
    }
  });
});
