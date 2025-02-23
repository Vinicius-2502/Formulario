const app = document.getElementById("app")
const formAction = () => {
  const form = document.getElementById("form")
  form.onsubmit = (event) => event.preventDefault()
}
const startapp = () => {
  const content = `<form id="form" >
<input type="email" name="email" placeholder="email">
<input type="text" name="phone" placeholder="telefone">
<button>confirmar</button>
</form> `
  app.innerHTML = content

  formAction()
}
startapp()
