import { openingHours } from "../../utils/opening-hours.js"
import dayjs from "dayjs"

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora
    const [sheduleHour] = hour.split(":")

    // Adiciona a hora na data e verificar se está no passado.
    const isHourPast = dayjs(date).add(sheduleHour, "hour").isAfter(dayjs())

    return {
      hour,
      available: isHourPast
    }
  })

  // Renderiza os horários
  opening.forEach(({ hour, available }) => {
    const li = document.createElement("li")
    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")
    li.textContent = hour
    hours.append(li)
  })
}