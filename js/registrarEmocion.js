document.addEventListener("DOMContentLoaded", function () {
  let emocionSeleccionada = null;

  // Manejar la selección de emoción
  document.querySelectorAll(".emoji-button").forEach((button) => {
    button.addEventListener("click", function () {
      // Quitar la selección previa
      document
        .querySelectorAll(".emoji-button")
        .forEach((btn) => btn.classList.remove("selected"));

      // Marcar como seleccionado el botón clickeado
      this.classList.add("selected");

      // Guardar la emoción seleccionada (para ver en consola)
      emocionSeleccionada = this.getAttribute("data-emocion");
      console.log("Emoción seleccionada:", emocionSeleccionada);
    });
  });

  // Manejar el clic en el botón "Enviar"
  document.getElementById("enviar").addEventListener("click", function () {
    let causaEmocion = document.getElementById("causa_emocion").value.trim();

    // Verificar si se seleccionó una emoción
    if (!emocionSeleccionada) {
      alert("Por favor, selecciona una emoción antes de continuar.");
      return;
    }

    // Verificar si se respondió la causa de la emoción
    if (causaEmocion === "") {
      alert(
        "Por favor, responde la pregunta '¿Qué causó esta emoción?' antes de continuar."
      );
      return;
    }

    // Construir la URL de redirección y navegar a ella
    let urlRedireccion = "emociones/" + emocionSeleccionada + ".html";
    console.log("Redirigiendo a:", urlRedireccion);
    window.location.href = urlRedireccion;
  });
});
