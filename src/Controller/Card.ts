import { ICity } from "../Model/ICitys";
import '../scss/Card.scss'

export const Card = (props: ICity, temperature: number) => {
    let {id, city, country, image, cityDescription} = props;
    const container = document.createElement('article') as HTMLElement;
    container.className = 'card-container';

    const img = document.createElement('img') as HTMLImageElement
    img.className = 'card-image'

    const infoContainer = document.createElement('div') as HTMLDivElement
    infoContainer.className = 'card-info'

    const title = document.createElement("h4") as HTMLHeadElement
    title.className = 'card-title text-capitalize'

    const cardCountry = document.createElement("p") as HTMLParagraphElement
    cardCountry.className = 'text-capitalize'
    // const description = document.createElement("p") as HTMLParagraphElement
    
    const temp = document.createElement("p") as HTMLElement;
    temp.innerText = `${String((temperature - 273.15).toFixed(2))}°C`;

    img.src = image
    title.innerText = city
    cardCountry.innerText = country
    // description.innerText = cityDescription

    const crossContainer = document.createElement("span") as HTMLSpanElement
    crossContainer.className = 'card-cross'
    crossContainer.innerHTML = `<i city-id="${id}" class="bi bi-x-circle-fill delete"></i>`;
    
    infoContainer.append(title, cardCountry, '', temp);
    
    const buttonContainer = document.createElement("div") as HTMLDivElement
    buttonContainer.className = 'card-button-container'
    const viewMoreButton = document.createElement("button") as HTMLButtonElement
    viewMoreButton.innerText = 'Ver más'
    viewMoreButton.className = 'card-view-more'
    viewMoreButton.setAttribute('id-button', String(id))
    
    const btnEdit = document.createElement('button') as HTMLButtonElement
    btnEdit.className = 'card-btn-edit'
    btnEdit.setAttribute('id-btn-edit', String(id))
    btnEdit.innerHTML = `<i class="bi bi-pencil-square"></i>`

    buttonContainer.append(viewMoreButton)
    container.append(img, infoContainer, crossContainer, buttonContainer, btnEdit);
    
    return container
}