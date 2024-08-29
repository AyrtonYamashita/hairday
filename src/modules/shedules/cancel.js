import { scheduleDays } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel"

const periods = document.querySelectorAll(".period")

// Gera um evento de clique para cada lista, manhã tarde e noite.
periods.forEach((period) => {
  period.addEventListener("click", async (e) => {
    if (e.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado
      const item = e.target.closest("li")

      // Pega o id do agendamento para remover
      const { id } = item.dataset

      // Confirma se o id foi selecionado
      if (id) {
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

        // Confirma se o usuario quer remover o agendamento
        if (isConfirm) {

          // Realiza a requisição para cancelar o agendamento
          await scheduleCancel({ id })

          // Recarrega a lista dos agendamentos.
          scheduleDays()
        }
      }
    }
  })
})