document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const menuDropdown = document.querySelector(".menu-dropdown");

    // Alternar la visibilidad del menú usando la clase "show"
    menuButton.addEventListener("click", function (event) {
      event.stopPropagation();
      menuDropdown.classList.toggle("show");
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", function (event) {
      if (
        !menuDropdown.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        menuDropdown.classList.remove("show");
      }
    });
  });