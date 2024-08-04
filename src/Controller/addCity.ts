import { ICity } from "../Model/ICitys";
import { CitiesController } from "./Cities.controller";

const form = document.querySelector('form') as HTMLFormElement;
const city = document.querySelector('#new-city') as HTMLInputElement;
const country = document.querySelector('#new-country') as HTMLInputElement
const image = document.querySelector('#new-image') as HTMLInputElement
const cityDescription = document.querySelector('#newCity-description') as HTMLTextAreaElement

// const cityArray:ICity[] = JSON.parse(localStorage.getItem("cityArray") || "[]")
const url = 'http://localhost:3000/'
let tokenUser = sessionStorage.getItem('token') as string
const citiesController = new CitiesController(url);

form.addEventListener('submit', async (e: Event) => {
    e.preventDefault()
    
    const newCity = {
        city: city.value,
        country: country.value,
        image: image.value,
        cityDescription: cityDescription.value,
        date: new Date(),
        tokenUser: tokenUser
    }

    try {
        const cityAdded = await citiesController.postCities("cities", newCity)
        console.log(cityAdded)
        window.location.href = '../View/home.html'
        form.reset()
        alert('Se agregó ciudad')
    } catch (error) {
        console.error(error)
        alert('No se pudo agregar la ciudad')
        return;
    }
    
    // cityArray.push(newCity)
    // localStorage.setItem('cityArray', JSON.stringify(cityArray))
    // form.reset()
    // alert('Se agregó ciudad')

})