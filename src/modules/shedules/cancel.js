const periods = document.querySelectorAll(".period")

// Gera um evento de clique para cada lista, manhã tarde e noite.
periods.forEach((period) => {
  period.addEventListener("click", (e) => {
    if (e.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado
      const item = e.target.closest("li")
      const { id } = item.dataset

      if (id) {
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

        if(isConfirm){
          console.log("REMOVER")
        }
      }
    }
  })
})