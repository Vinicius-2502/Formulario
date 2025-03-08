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
    refby: 100,
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
  app.innerHTML = ` <input type="text" id="link" value="ref=${
    userData.ref
  }" disabled>
  <div id="stats">
  <h4>${getTotalSubscribs(userData)}</h4>
   <p>inscrição aprovada</p>
  </div>`
}

const startapp = () => {
  const content = `        <main>
          <section class="about">
            <div class="section-header">
              <h2>Sobre o evento</h2>
              <span class="badge">AO VIVO</span>
            </div>
            <p>
              Um evento feito por e para pessoas desenvolvedoras apaixonadas por
              criar soluções inovadoras e compartilhar conhecimento.Vamos
              mergulhar nas tendencias mais recentes em desenvolvimento de
              software, arquitetura de sistemas e tecnologias emergentes, com
              palestras, whorkshops e hackathons. <br /><br />
              Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
            </p>
          </section>
          <section class="registration">
            <h2>Inscrição</h2>
            <form id="form">
              <div class="input-wrapper">
                <div class="input-group">
                  <label for="email"><img src="./imagens/mail.svg" alt="Email icon"></label>
                  <input type="email" id="email" name="email" placeholder="E-mail">
                </div>
                
                
              <div class="input-wrapper">
              <div class="input-group">
              <label for="phone"><img src="./imagens/phone.svg" alt="Phone icon"></label>
              <input type="text" id="phone" name="phone" placeholder="Telefone">
              </div>

              </div>

                <button>Confirmar</button>
                <img src="./imagens/arrow.svg" alt="arrow-right">
            </form>
          </section>
        </main>
`
  app.innerHTML = content
  updateImageLinks()
  formAction()
}
startapp()

document.getElementById("logo").onclick = () => startapp()
