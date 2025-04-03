// Fecha actual para iniciar el calendario
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Función para generar el calendario
function generateCalendar(month, year) {
  const calendarBody = document.getElementById("calendar-body");
  calendarBody.innerHTML = ""; // Limpia el contenido previo

  const monthYear = document.getElementById("month-year");
  const monthNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  monthYear.textContent = `${monthNames[month]} - ${year}`;

  // Determinar el primer día de la semana del mes y la cantidad de días del mes
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let date = 1;
  // Se generan hasta 6 filas para cubrir todos los casos
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");

      // Si es la primera fila y aún no se alcanzó el primer día, se dejan celdas vacías
      if (i === 0 && j < firstDay) {
        cell.textContent = "";
      } else if (date > daysInMonth) {
        // Si ya se pasaron los días del mes, se dejan celdas vacías
        cell.textContent = "";
      } else {
        cell.textContent = date;
        date++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);

    // Rompe el ciclo si ya se terminaron los días del mes
    if (date > daysInMonth) {
      break;
    }
  }
}

// Función para avanzar al siguiente mes
function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentMonth, currentYear);
}

// Función para retroceder al mes anterior
function prevMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentMonth, currentYear);
}

// Genera el calendario cuando se carga la página
document.addEventListener("DOMContentLoaded", function() {
  generateCalendar(currentMonth, currentYear);
});
