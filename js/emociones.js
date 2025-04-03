document.getElementById("enviar").addEventListener("click", function () {
  const sentirTexto = document.getElementById("sentir").value;

  if (sentirTexto.trim() === "") {
    alert("Por favor, escribe cómo te sientes antes de enviar.");
    return;
  }

  // Mostrar el mensaje de éxito
  document.getElementById("mensaje-container").style.display = "block";

  this.style.display = "none"; // Ocultar el botón de enviar
  document.querySelector(".form-container input").style.display = "none";
});
