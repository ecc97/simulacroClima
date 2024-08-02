import { ICity } from "../Model/ICitys";

const form = document.querySelector('form') as HTMLFormElement;
const city = document.querySelector('#new-city') as HTMLInputElement;
const country = document.querySelector('#new-country') as HTMLInputElement
const image = document.querySelector('#new-image') as HTMLInputElement
const cityDescription = document.querySelector('#newCity-description') as HTMLTextAreaElement

// const cityArray:ICity[] = JSON.parse(localStorage.getItem("cityArray") || "[]")

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    
    const newCity = {
        city: city.value,
        country: country.value,
        image: image.value,
        cityDescription: cityDescription.value,
        date: new Date()
    }
    
    // cityArray.push(newCity)
    // localStorage.setItem('cityArray', JSON.stringify(cityArray))
    // form.reset()
    // alert('Se agregó ciudad')

})