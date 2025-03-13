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

const updateImageLinks = () => {
  document.querySelectorAll("img").forEach((img) => {
    if (img.src.includes("githubusercontent")) {
      return
    }
    const src = img.getAttribute("src")
    img.src = `https://raw.githubusercontent.com/maykbrito/my-public-files/main/nlw-19/${src}`
  })
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
  app.innerHTML = ` 
  
     <main>
          <h3>
        Inscrição confirmada!
        </h3>
        <p>Convide mais pessoas e concorra a prêmios! <br> Compartilhe o link e acompanhe as 
        inscrições:</p>

        <div class="input-group">
          <label for="link">
            <img src="link.svg" alt="link-icon">
          </label>
        <input type="text" id="link" value="https://evento.com?ref=${userData.ref}" disabled>
        </div>
      </main>
      <section class="stats">
      <h4>${getTotalSubscribs(userData)}</h4>
        <p>Inscrições feitas</p>
      </section>
   `
   app.setAttribute('class','page-invite')
  updateImageLinks()
}

const startapp = () => {
    app.innerHTML = ""
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
                  <label for="email"><img src="mail.svg" alt="Email icon"></label>
                  <input type="email" id="email" name="email" placeholder="E-mail">
                </div>
             
               <div class="input-group">
                 <label for="phone"><img src="phone.svg" alt="Phone icon"></label>
                 <input type="text" id="phone" name="phone" placeholder="Telefone">
               </div>
              </div>
                <button>Confirmar
                <img src="arrow.svg" alt="arrow-right">
                </button>
            </form>
          </section>
        </main>
`
  app.innerHTML = content
  app.setAttribute('class', 'page-start')
  updateImageLinks()
  formAction()
}
startapp() 
document.querySelector("header").onclick = () => startapp()
