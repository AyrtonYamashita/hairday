import { scheduleDays } from "../shedules/load.js"

// Seleciona um input de data
const selectedDate = document.getElementById("date")

// Recarrega a lista de horários quando o input de data mudar
selectedDate.onchange = () => {
  scheduleDays()
}