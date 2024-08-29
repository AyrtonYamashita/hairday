import dayjs from "dayjs"
const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// Data atual para input
const today = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual e define data mínima
selectedDate.value = today;
selectedDate.min = today;

form.onsubmit = (e) => {
  e.preventDefault()
  console.log("enviado!")
}
