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

window.lengthCheck = function(value, minLength) {
    return value.length >= minLength;
}

function validarPassword(event) {
    event.preventDefault();

    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var lengthCheck = password.length >= 8;
    var upperCheck = /[A-Z]/.test(password);
    var lowerCheck = /[a-z]/.test(password);
    var numberCheck = /\d/.test(password);
    var specialCheck = /[@$!%*?&_]/.test(password);
    var matchCheck = password === confirmPassword;

    // Validacion de los datos y tiempo de espera de los mensajes
    if (!lengthCheck) showError(document.getElementById("passwordLength"));
    if (!upperCheck) showError(document.getElementById("passwordUpper"));
    if (!lowerCheck) showError(document.getElementById("passwordLower"));
    if (!numberCheck) showError(document.getElementById("passwordNumber"));
    if (!specialCheck) showError(document.getElementById("passwordSpecial"));


    if (!matchCheck) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    return lengthCheck && upperCheck && lowerCheck && numberCheck && specialCheck && matchCheck;
    if (!valid) {
        return false;
    }

    if (valid) {
        event.target.submit(); // Enviar formulario si todo es válido
    }
}

// Mostrar y ocultar la contraseña al marcar o desmarcar el checkbox
document.getElementById('showPassword').addEventListener('change', function() {
    var passwordField = document.getElementById('password');
    var confirmPasswordField = document.getElementById('confirm_password');
    var type = this.checked ? 'text' : 'password';
    passwordField.type = type;
    confirmPasswordField.type = type;
});

function redirigirPagina() {
    window.location.href = "{{ route('hpView') }}"; 
}

function showError(messageElement) {
    messageElement.style.display = 'block';

    // Eliminar temporizadores anteriores si existen
    if (messageElement.timeoutId) {
        clearTimeout(messageElement.timeoutId);
    }

    // Configurar desvanecimiento después de 5 segundos
    messageElement.timeoutId = setTimeout(() => {
        messageElement.classList.add('fade-out');

        // Ocultar completamente después de la transición
        setTimeout(() => {
            messageElement.style.display = 'none';
            messageElement.classList.remove('fade-out');
        }, 750);

    }, 5000);
}

// Modificar las líneas donde se muestran los errores (ejemplo):
document.getElementById("passwordLength").style.display = lengthCheck ? "none" : showError(document.getElementById("passwordLength"));

