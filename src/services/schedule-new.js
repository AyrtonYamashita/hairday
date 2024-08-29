import { apiConfig } from "./api-config"

export async function sheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, when })
  })

  alert("Agendamento realizado com sucesso!")
  } catch (e) {
    alert("Não foi possível agendar, tente novamente mais tarde")
    console.log(e)
  }
}