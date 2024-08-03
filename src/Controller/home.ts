import { CitiesController } from "./Cities.controller"
import { Card } from "./Card"
import { Spinner } from "./Spinner"
import { IWeather } from "../Model/IWeather"

const logoutButton = document.querySelector('#logout-btn')
const carSection = document.querySelector('#cards-section')
const loaderContainer = document.querySelector('.loader-container') as HTMLDivElement

const url = 'http://localhost:3000/'

loaderContainer.append(Spinner())
window.addEventListener('DOMContentLoaded', () => {
    if(!sessionStorage.getItem('token')) {
        window.location.href = '/'
    }
    loaderContainer.style.display = 'flex'
})

window.addEventListener("load", () => {
    setTimeout(() => {
        loaderContainer.style.display = 'none'
    }, 500)
})

logoutButton?.addEventListener('click', ()=> {
    sessionStorage.removeItem('token')
    window.location.href = '/'
})

async function showCities(){
    const citiesController = new CitiesController(url)
    const cities = await citiesController.getCities("cities")

    console.log(cities)
    cities.forEach(async (city) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.city}&APPID=0f5b88c7945f5e5a9de373b54ccecc6a`)
        const data: IWeather = await response.json()
        carSection?.append(Card(city, data.main.temp))
    })
    
}

showCities()

document.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLElement;
    if(target.className.includes('card-view-more')){
        const idViewMore = target.getAttribute('id-button')
        localStorage.setItem('id-view', String(idViewMore))
        window.location.href = `../View/information.html?id=${idViewMore}`
    }
})