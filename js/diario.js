function mostrarPreguntasAdicionales() {
  var paso = document.getElementById("paso").value;
  var preguntas = document.getElementById("preguntas-adicionales");
  if (paso === "Sí") {
    preguntas.classList.remove("hidden");
  } else {
    preguntas.classList.add("hidden");
  }
}

document
  .getElementById("paso")
  .addEventListener("change", mostrarPreguntasAdicionales);

document.getElementById("enviar").addEventListener("click", function (event) {
  event.preventDefault(); // Evita la recarga de la página

  let form = document.querySelector("form");
  let formData = new FormData(form);

  fetch("{{ route('registrarEmocion') }}", {
    method: "POST",
    body: formData,
    headers: {
      "X-CSRF-TOKEN": "{{ csrf_token() }}",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Ocultar botón de enviar
        document.getElementById("enviar").style.display = "none";

        // Mostrar mensaje con imagen de la niña
        let mensajeContainer = document.getElementById("mensaje-container");
        mensajeContainer.style.display = "flex";

        // Deshabilitar todos los campos del formulario para evitar cambios
        document
          .querySelectorAll("form select, form button")
          .forEach((input) => (input.disabled = true));
      } else {
        // Mostrar alerta si ya se registró la emoción en el día
        alert(data.message);
      }
    })
    .catch((error) => console.error("Error:", error));
});
