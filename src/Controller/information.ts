import { ICity } from "../Model/ICitys"

const main = document.querySelector('#home-main') as HTMLElement
const idCity = localStorage.getItem('id-view')

async function getInfo(): Promise<ICity>{
    const response = await fetch(`http://localhost:3000/cities/${idCity}`)
    const data = await response.json()
    console.log(data)
    return data
}

function showInfo(props: ICity){
    const {city, country, image, cityDescription} = props;

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

    main.append(img, title, cardCountry, description)
}

const informationCity = getInfo()

// async function renderAll() {
//    showInfo(informationCity)
// }

// renderAll()



