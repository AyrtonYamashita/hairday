import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function getSchedulebyDay({ date }) {
  try {
    // Fazendo uma requisição. 
    const response = await fetch(`${apiConfig.baseUrl}/schedules`)

    // Converte para json
    const data = await response.json()

    // Filtra os agendamentos pelo dia selecionado
    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

    return dailySchedules
  } catch (error) {
    alert("Não foi possível buscar os agendamentos do dia selecionado.")
    console.log(error)
  }
}