const app = document.getElementById("app")
const users = [
  {
    email: "test@test.com",
    phone: "999999999999999",
    ref: 100,
    refby: null,
  },
  {
    email: "tust@tust.com",
    phone: "111111111111111",
    ref: 200,
    refby: 100,
  },
]
const formAction = () => {
  const form = document.getElementById("form")
  form.onsubmit = (event) => event.preventDefault()
  const formData = new formData(form)
  userData = {
    email: formData.get("email"),
    phone: formData.get("phone"),
  }
  const user = getUser(userData)
}

const getUser = (userData) =>{
  return users.find((user) =>{
return user.email == userData.email})}

const showInvite=(userData)=>{
 app.innerHTML = ``
}

if(user){
showInvite(user)
}
else{

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
