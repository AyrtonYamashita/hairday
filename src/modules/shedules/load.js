import { getSchedulebyDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import { scheduleShow } from "../shedules/show.js"

// Seleciona o input de data
const selectedDate = document.getElementById("date")

export async function scheduleDays() {
  // Obtém a data do input
  const date = selectedDate.value

  // Busca na API os agendamentos para carregar no lado direito da tela.
  const dailySchedules = await getSchedulebyDay({ date })

  // Exibe os agendamentos
  scheduleShow({ dailySchedules })

  // Renderiza as horas disponíveis.
  hoursLoad({ date, dailySchedules })


  // Os horários disponíveis (horário futuro) do lado esquerdo (form)
}