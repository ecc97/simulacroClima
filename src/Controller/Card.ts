import { ICity } from "../Model/ICitys";
import '../scss/Card.scss'

export const Card = (props: ICity) => {
    let {id, city, country, image, cityDescription} = props;
    const container = document.createElement('article') as HTMLElement;
    container.className = 'card-container';

    const img = document.createElement('img') as HTMLImageElement
    img.className = 'card-image'

    const infoContainer = document.createElement('div') as HTMLDivElement
    infoContainer.className = 'card-info'

    const title = document.createElement("h4") as HTMLHeadElement
    title.className = 'card-title'

    const cardCountry = document.createElement("p") as HTMLParagraphElement
    const description = document.createElement("p") as HTMLParagraphElement
    
    img.src = image
    title.innerText = city
    cardCountry.innerText = country
    description.innerText = cityDescription

    const crossContainer = document.createElement("span") as HTMLSpanElement
    crossContainer.className = 'card-cross'
    crossContainer.innerHTML = `<i product-id = ${id} class="bi bi-x-circle-fill"></i>`;
    
    infoContainer.append(title, country, description);
    container.append(img, infoContainer, crossContainer);
    return container
}