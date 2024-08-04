import { ICity } from "../Model/ICitys"
import { CitiesController } from "./Cities.controller"
import '../scss/information.scss'

const main = document.querySelector('#home-main') as HTMLElement
const idCity = localStorage.getItem('id-view')

const url = 'http://localhost:3000/'

function showInfo(props: ICity){
    const {city, country, image, cityDescription, date} = props;
    const container = document.createElement('div') as HTMLElement
    container.className = 'card-container'

    const img = document.createElement('img') as HTMLImageElement
    img.className = 'card-image'
    img.src = image

    const title = document.createElement("h1") as HTMLHeadElement
    title.className = 'card-title'
    title.innerText = city

    const cardCountry = document.createElement("p") as HTMLParagraphElement
    cardCountry.innerText = country

    const description = document.createElement("p") as HTMLParagraphElement
    description.innerText = cityDescription

    const dateElement = document.createElement("span") as HTMLSpanElement
    dateElement.innerText = `Fecha: ${new Date(date).toLocaleDateString()}`

    container.append(img, title, cardCountry, description, dateElement)
    main.append(container)

    return main
}


async function renderAll() {
    try {
        const citiesController = new CitiesController(url)
        const informationCity: ICity = await citiesController.getInfo("cities/", idCity)
        showInfo(informationCity)
    } catch (error) {
        console.error(error)
        alert('Error al cargar la información')
        main.innerHTML = 'Error al cargar la información'
    }
}

renderAll()



