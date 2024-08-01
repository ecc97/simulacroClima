import { PageController } from "./Controller/Page.controller";

const url = 'https://reqres.in/api/'

const loginForm = document.querySelector('#loginForm') as HTMLFormElement;
const emailUser = document.querySelector('#emailUser') as HTMLInputElement
const passwordUser = document.querySelector('#passwordUser') as HTMLInputElement

loginForm.addEventListener('submit', async (e: Event) => {
  e.preventDefault()

  const user = {
    email: emailUser.value,
    password: passwordUser.value
  }

  try {
    const pageController = new PageController(url)
    const responseLogin = await pageController.login(user, 'login')
    console.log(responseLogin.token)
  
    sessionStorage.setItem('token', responseLogin.token)
  
    const getToken = sessionStorage.getItem('token')
    if(getToken === responseLogin.token) {
      window.location.href = './src/View/home.html'
    }
  } catch (e) {
    console.error(e)
    alert('Error al iniciar sesión')
  }

})