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
  {
    email: "tost@tost.com",
    phone: "111111111111111",
    ref: 300,
    refby: 200,
  },
]

const saveUser = (userData) => {
  const newUser = {
 ...userData,
 ref: Math.round(Math.random() * 4000),
 refby: 100
  }
  users.push(newUser)
  return newUser
}


const formAction = () => {
  const form = document.getElementById("form")
  form.onsubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    userData = {
      email: formData.get("email"),
      phone: formData.get("phone"),
    }
    const user = getUser(userData)
    if (user) {
      showInvite(user)
    } else {
      const newUser = saveUser(userData)
      showInvite(newUser)
    }
  }
}

const getUser = (userData) => {
  return users.find((user) => {
    return user.email == userData.email
  })
}

const getTotalSubscribs = (userdata) => {
  const subs = users.filter((user) => {
    return user.refby == userdata.ref
  })
  return subs.length
}

const showInvite = (userData) => {
  app.innerHTML = ` <input type="text" id="link" value="ref=${userData.ref}" disabled>
  <div id="stats">
  <h4>${getTotalSubscribs(userData)}</h4>
   <p>inscrição aprovada</p>
  </div>`
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

document.getElementById('logo').onclick = () => startapp()