import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import { scheduleDays } from "../shedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Data atual para input
const today = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e define data mínima
selectedDate.value = today;
selectedDate.min = today;

form.onsubmit = async (e) => {
  e.preventDefault()

  try {
    // Recuperando o nome do cliente.
    const name = clientName.value.trim()
    if (!name) {
      return alert("Informe o nome do cliente!")
    }

    // Recupera o horário selecionado
    const hourSelected = document.querySelector(".hour-selected")
    if (!hourSelected) {
      return alert("Selecione a hora!")
    }

    // Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":")

    // Insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour")

    // Gera um id
    const id = new Date().getTime().toString()


    // Faz o agendamento
    await scheduleNew({
      id,
      name,
      when
    })

    await scheduleDays()
    clientName.value = ""
  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }


}
