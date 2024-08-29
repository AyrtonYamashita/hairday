import { apiConfig } from "./api-config"

export async function scheduleNew({ id, name, when }) {
  try {

    // Faz requisição para enviar os dados do agendamento
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when })
  })
  // Exibe mensagem de agendamento realizado!
  alert("Agendamento realizado com sucesso!")
  } catch (e) {
    alert("Não foi possível agendar, tente novamente mais tarde")
    console.log(e)
  }
}