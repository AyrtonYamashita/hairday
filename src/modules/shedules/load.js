import { hoursLoad } from "../form/hours-load.js"

// Seleciona o input de data
const selectedDate = document.getElementById("date")

export function scheduleDays() {
  // Obtém a data do input
  const date = selectedDate.value

  // Renderiza as horas disponíveis.
  hoursLoad({ date })

  // Busca na API os agendamentos para carregar no lado direito da tela.

  // Os horários disponíveis (horário futuro) do lado esquerdo (form)
}