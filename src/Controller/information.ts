import { ICity } from "../Model/ICitys"
import '../scss/information.scss'

const main = document.querySelector('#home-main') as HTMLElement
const idCity = localStorage.getItem('id-view')

async function getInfo(): Promise<ICity>{
    const response = await fetch(`http://localhost:3000/cities/${idCity}`)
    const data: ICity = await response.json()
    console.log(data)
    return data
}

function showInfo(props: ICity){
    const {city, country, image, cityDescription} = props;
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

    container.append(img, title, cardCountry, description)
    main.append(container)

    return main
}


async function renderAll() {
    try {
        const informationCity: ICity = await getInfo()
        showInfo(informationCity)
    } catch (error) {
        console.error(error)
        alert('Error al cargar la información')
        main.innerHTML = 'Error al cargar la información'
    }
}

renderAll()



